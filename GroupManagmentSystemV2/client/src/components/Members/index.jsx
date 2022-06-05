import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowMembers() {
    const [membersList, setMembersList] = useState([])

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

    const editMember= (id) => {
        axios.get(`http://localhost:8080/api/members/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/members").then((allMembers) => {
            setMembersList(allMembers.data)
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
            <div class={styles.center}>
                <table class={styles.styledtable}>
                    <thead>
                        <tr>
                            <th>Imię</th>
                            <th>Nazwisko</th>
                            <th>Grupa</th>
                            <th>Data urodzenia</th>
                            <th>Stopień</th>
                            <th>Usuwanie</th>
                        </tr>
                    </thead>
                    <tbody>
                        {membersList.map((member, key) => (
                            <tr class={styles.activerow} key={key}>
                                <td>{member.name}</td>
                                <td>{member.lastName}</td>
                                <td>{member.groupID}</td>
                                <td>{member.dateOfBirth.slice(0, 10)}</td>
                                <td>{member.function}</td>
                                <td><button
                                    className={styles.delete_btn} onClick={() => deleteMember(member._id)}>
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