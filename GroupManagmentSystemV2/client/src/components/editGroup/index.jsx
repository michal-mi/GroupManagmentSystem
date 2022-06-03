import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import {React, useEffect, useState} from "react";

export default function ShowGroup() {

    const [error, setError] = useState("")
    const [data, setData] = useState({
        name: "",
        dateOfCreation: "",
        description: ""
    })
    const navigate = useNavigate()
    const [groupsList, setGroupList] = useState([])
    const id = window.location.href.slice(-24)
    var groupName = returnGroupName()
    console.log(groupName)
    const [groupName1, setGroupName1] = useState({})
    var groupInfo = ""
    var groupDelButton = ""

    function xd(){
        setGroupName1(groupName1=>[...groupName1, groupName])
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/groups"
            const { data: res } = await axios.post(url, data)
            navigate("/groups")
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message)
            }
        }
    }

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    function returnGroupName() {
        groupsList.map((group, key) => {
            if (group._id === id) {
                groupName = group.name
            }
        })
        //setGroupName1(groupName.target.value)
        return groupName
    }

    function returnGroupInfo() {
        groupsList.map((group, key) => {
            if (group._id === id) {
                groupInfo = <div>
                    <h2><b>Nazwa grupy: </b>{group.name}</h2>
                    <div className={styles.center}><b>Data utworzenia grupy:</b></div>
                    <div className={styles.center}>{group.dateOfCreation.slice(0, 10)}</div>
                    <br></br>
                    <div className={styles.center}><b>Opis grupy:</b></div>
                    <div className={styles.center}>{group.description}</div>
                </div>
            }
        })
        return groupInfo
    }

    function returnGroupDelButton() {
        groupsList.map((group, key) => {
            if (group._id === id) {
                groupDelButton = <button
                    className={styles.delete_btn} onClick={() => deleteGroup(group._id)}>
                    Usuń
                </button>
            }
        })
        return groupDelButton
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/groups").then((allGroups) => {
            setGroupList(allGroups.data)
            setGroupName1(groupName)
            console.log(groupName)
            //xd() pobierać dane z linku i dopiero zmodyfikowane zapisywać do bazy danych
            console.log(groupName)
        })
    }, [])

    const deleteGroup = (id) => {
        axios.delete(`http://localhost:8080/api/groups/${id}`).then(() => {
            navigate("/groups")
            window.location.reload(false);
        })
    }

    return (
        <div>
        <div className={styles.center}><h2>Kreator grupy</h2></div>
        <form className={styles.form_container} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nazwa grupy"
                //name="groupName1" how to display and modify const in textfield react
                //onChange={(e)=>setGroupName1(e.target.value)}
                onChange={groupName1}
                value={groupName1}
                className={styles.input}
            />
            <p>
                <div className={styles.special}>Data utworzenia:</div>
                <input
                    type="date"
                    placeholder="Data utworzenia grupy"
                    name="dateOfCreation"
                    onChange={handleChange}
                    value={data.dateOfCreation}
                    className={styles.input1}
                />
            </p>
            <input
                type="text"
                placeholder="Opis"
                name="description"
                onChange={handleChange}
                value={data.description}
                className={styles.input}
            />
            <div class={styles.center}>
                {error && <div className={styles.error_msg}>{error}</div>}
                <button
                    type="submit"
                    className={styles.green_btn}>
                    Zapisz zmiany
                </button>
            </div>
        </form>
        <div className={styles.center}>
                {returnGroupDelButton()}
            </div>
        </div>
    )
}