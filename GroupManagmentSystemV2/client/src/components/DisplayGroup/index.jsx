import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { React, useEffect, useState } from "react";

export default function ShowGroup() {
    const navigate = useNavigate()
    const [groupsList, setGroupList] = useState([])
    const id = window.location.href.slice(-24)
    var groupName = ""
    var groupInfo = ""
    var groupDelButton = ""

    function returnGroupName() {
        groupsList.map((group, key) => {
            console.log(group._id)
            console.log(id)
            if (group._id === id) {
                groupName = group.name
            }
        })
        return groupName
    }

    function returnGroupInfo() {
        groupsList.map((group, key) => {
            console.log(group._id)
            console.log(id)
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
            console.log(group._id)
            console.log(id)
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
                <h1>Szczegóły {returnGroupName()}</h1>
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
                {returnGroupInfo()}
            </div>
            <br></br>
            <div className={styles.center}>
                {returnGroupDelButton()}
            </div>
        </div>
    )
}