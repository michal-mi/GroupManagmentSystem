import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowMembers() {
    const [membersList, setMembersList] = useState([])
    const [groupsList, setGroupsList] = useState([])

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
        axios.get("http://localhost:8080/api/members").then((allMembers) => {
            setMembersList(allMembers.data)
        })
        axios.get("http://localhost:8080/api/groups").then((allGroups) => {
            setGroupsList(allGroups.data)
        })
    }, [])

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Spis osób</h1>
                <Link to="/">
                    <button
                        className={styles.exit_btn}>
                        Strona Główna
                    </button>
                </Link>
            </nav>

            <div class={styles.center}>
                <Link to="/addMember">
                    <button type="button"
                        className={styles.green_btn}>
                        Dodaj osobę
                    </button>
                </Link>
            </div>
            <div className={styles.center}>
                <table className={styles.styledtable}>
                    <thead>
                        <tr>
                            <th className={styles.centertext}>Imię</th>
                            <th className={styles.centertext}>Nazwisko</th>
                            <th className={styles.centertext}>Grupa</th>
                            <th className={styles.centertext}>Data urodzenia</th>
                            <th className={styles.centertext}>Dostępne akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {membersList.map((member, key) => (
                            <tr class={styles.activerow} key={key}>
                                <td className={styles.centertext}>{member.name}</td>
                                <td className={styles.centertext}>{member.lastName}</td>
                                <td className={styles.centertext}> {groupsList.map((group, key) => (
                                    group._id === member.groupID ?
                                        <div>{group.name}</div> :
                                        <div></div>
                                ))}</td>
                                <td className={styles.centertext}>{member.dateOfBirth.slice(0, 10)}</td>
                                <td className={styles.centertext}><button
                                    className={styles.delete_btn} onClick={() => {
                                        const confirmBox = window.confirm(
                                            "Osoba zostanie bezpowrotnie usunięta. Kontynować?"
                                        )
                                        if (confirmBox === true) {
                                            deleteMember(member._id)
                                        }
                                    }}>
                                    Usuń
                                </button>
                                    <Link to={"/displayMember/" + member._id}>
                                        <button
                                            className={styles.details_btn} onClick={() => displayMember(member._id)}>
                                            Szczegóły
                                        </button>
                                    </Link>
                                    <Link to={"/editMember/" + member._id}>
                                        <button
                                            className={styles.edit_btn} onClick={() => editMember(member._id)}>
                                            Edytuj
                                        </button>
                                    </Link>

                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
            <div class={styles.right}>
                <Link to="/addMember">
                    <button type="button"
                        className={styles.green_btn_small}>
                        Dodaj osobę
                    </button>
                </Link>
            </div>
        </div>
    )
}