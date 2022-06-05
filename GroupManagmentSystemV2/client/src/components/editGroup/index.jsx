import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { React, useEffect, useState } from "react";

export default function ShowGroup() {

    const navigate = useNavigate()
    const id = window.location.href.slice(-24)
    const [error, setError] = useState("")
    const [data, setData] = useState({
        name: "",
        dateOfCreation: "",
        description: ""
    })
    const [groupsList, setGroupList] = useState([])
    const [groupName, setGroupName] = useState()
    const [groupDate, setGroupDate] = useState()
    const [groupDescription, setGroupDescription] = useState()
    var groupDelButton = ""

    function setEdition() {
        setGroupName(returnGroupName())
        setGroupDate(returnGroupDate().slice(0, 10))
        setGroupDescription(returnGroupDescription())
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        data.name = groupName
        data.dateOfCreation = groupDate
        data.description = groupDescription
        try {
            const url = `http://localhost:8080/api/groups/${id}`
            const { data: res } = await axios.post(url, data)
            alert(res.message)
            navigate("/groups")
            console.log(res.message)
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

    function returnGroupName() {
        var groupName
        groupsList.map((group, key) => {
            if (group._id === id) {
                groupName = group.name
            }
        })
        return groupName
    }

    function returnGroupDate() {
        var groupDate
        groupsList.map((group, key) => {
            if (group._id === id) {
                groupDate = group.dateOfCreation
            }
        })
        return groupDate
    }

    function returnGroupDescription() {
        var groupDescription
        groupsList.map((group, key) => {
            if (group._id === id) {
                groupDescription = group.description
            }
        })
        return groupDescription
    }

    function returnGroupDelButton() {
        groupsList.map((group, key) => {
            if (group._id === id) {
                groupDelButton = <button
                    className={styles.delete_btn} onClick={() => {
                        const confirmBox = window.confirm(
                            "Wszystkie powiązane z tą grupą osoby zostaną usunięte!!! Czy na pewno chcesz usunąć tą grupę?"
                        )
                        if (confirmBox === true) {
                            deleteGroup(group._id)
                        }
                    }}>
                    Usuń
                </button>
            }
        })
        return groupDelButton
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/groups").then((allGroups) => {
            setGroupList(allGroups.data)
        })
    }, [])

    const deleteGroup = (id) => {
        axios.delete(`http://localhost:8080/api/groups/${id}`).then(() => {
            navigate("/groups")
            window.location.reload(false);
        })
    }

    return (
        <div className={styles.main_container}>

            <nav className={styles.navbar}>
                <h1>Edytowanie {returnGroupName()}</h1>
                <Link to="/groups">
                    <button
                        className={styles.exit_btn}>
                        Powrót
                    </button>
                </Link>
                <Link to="/groups_members">
                    <button
                        className={styles.exit_btn}>
                        Lista grupy-osoby
                    </button>
                </Link>
            </nav>

            <div className={styles.center}>
                <button className={styles.start_edit_btn} onClick={() => setEdition()}>
                    Kilknij by edytować dotychasowe dane
                </button>
            </div>

            <div className={styles.center}><h2>Edytor grupy</h2></div>

            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nazwa grupy"
                    name="groupName"
                    onChange={(e) => setGroupName(e.target.value)}
                    value={groupName}
                    className={styles.input}
                    required
                />
                <p>
                    <div className={styles.special}>Data utworzenia:</div>
                    <input
                        type="date"
                        placeholder="Data utworzenia grupy"
                        name="dateOfCreation"
                        onChange={(e) => setGroupDate(e.target.value)}
                        value={groupDate}
                        className={styles.input1}
                        required
                    />
                </p>
                <input
                    type="text"
                    placeholder="Opis"
                    name="description"
                    onChange={(e) => setGroupDescription(e.target.value)}
                    value={groupDescription}
                    className={styles.input}
                />
                <div className={styles.center}>
                    {returnGroupDelButton()}
                </div>
                <div class={styles.center}>
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button
                        type="submit"
                        className={styles.green_btn}>
                        Zapisz zmiany
                    </button>
                </div>
            </form>
        </div>
    )
}