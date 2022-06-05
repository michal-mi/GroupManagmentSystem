import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

const groups = "http://localhost:8080/api/groups";
//import axios from "axios";
console.log(groups)

//const Main = () => {
export default function ShowGroups() {
    const [groupsList, setGroupList] = useState([])
    const [membersList, setMemberList] = useState([])

    const deleteGroup = (id) => {
        axios.delete(`http://localhost:8080/api/groups/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    const displayGroup = (id) => {
        axios.get(`http://localhost:8080/api/groups/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    const editGroup = (id) => {
        axios.get(`http://localhost:8080/api/groups/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    const deleteMember = (id) => {
        axios.delete(`http://localhost:8080/api/members/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    const displayMember = (id) => {
        axios.get(`http://localhost:8080/api/members/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    const editMember = (id) => {
        axios.get(`http://localhost:8080/api/members/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/groups").then((allGroups) => {
            setGroupList(allGroups.data)
        })
        axios.get("http://localhost:8080/api/members").then((allMembers) => {
            setMemberList(allMembers.data)
        })
    }, [])


    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Spis grupy - osoby</h1>
                <Link to="/">
                    <button
                        className={styles.exit_btn}>
                        Strona Główna
                    </button>
                </Link>
            </nav>

            {groupsList.map((group, key) => (
                <div class={styles.center}>
                    <table class={styles.styledtable}>
                        <thead>
                            <tr class={styles.activerow} key={key}>
                                <th><b>{group.name}</b></th>
                                <th>
                                    <button
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
                                </th>
                                <th>
                                    <Link to={"/displayGroup/" + group._id}>
                                        <button
                                            className={styles.details_btn} onClick={() => displayGroup(group._id)}>
                                            Szczegóły
                                        </button>
                                    </Link>
                                </th>
                                <th>
                                    <Link to={"/editGroup/" + group._id}>
                                        <button
                                            className={styles.edit_btn} onClick={() => editGroup(group._id) }>
                                            Edytuj
                                        </button>
                                    </Link>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {membersList.map((member, key1) => (
                                member.groupID === group._id ?
                                    <tr class={styles.activerow} key={key1}>
                                        <td>{member.name + " " + member.secondName + " " + member.lastName}</td>
                                        <td>
                                            <button
                                                className={styles.delete_btn} onClick={() => {
                                                    const confirmBox = window.confirm(
                                                        "Ta osoba zostanie usunięta! Czy na pewno chcesz kontynować?"
                                                    )
                                                    if (confirmBox === true) {
                                                        deleteMember(member._id)
                                                    }
                                                }}>
                                                Usuń
                                            </button>
                                        </td>
                                        <td>
                                            <Link to={"/displayMember/" + member._id}>
                                                <button
                                                    className={styles.details_btn} onClick={() => displayMember(member._id)}>
                                                    Szczegóły
                                                </button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Link to={"/editMember/" + member._id}>
                                                <button
                                                    className={styles.edit_btn} onClick={() => editMember(member._id)}>
                                                    Edytuj
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                    :
                                    <div></div>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}

            <div class={styles.right}>
                <Link to="/addGroup">
                    <button type="button"
                        className={styles.green_btn_small}>
                        Stwórz grupę
                    </button>
                </Link>
                <Link to="/addMember">
                    <button type="button"
                        className={styles.green_btn_small}>
                        Stwórz osobę
                    </button>
                </Link>
            </div>
        </div>
    )
}
//export default Main
//export default ShowGroups