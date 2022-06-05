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

    useEffect(() => {
        axios.get("http://localhost:8080/api/groups").then((allGroups) => {
            setGroupList(allGroups.data)
        })
    }, [])


    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Spis grup</h1>
                <Link to="/">
                    <button
                        className={styles.exit_btn}>
                        Strona Główna
                    </button>
                </Link>
            </nav>

            <div className={styles.center}>
                <Link to="/addGroup">
                    <button type="button"
                        className={styles.green_btn}>
                        Stwórz grupę
                    </button>
                </Link>
            </div>
            <div className={styles.center}>
                <table className={styles.styledtable}>
                    <thead>
                        <tr>
                            <th className={styles.textcenter}>Nazwa</th>
                            <th className={styles.textcenter}>Data utworzenia</th>
                            <th className={styles.textcenter}>Opis</th>
                            <th className={styles.textcenter}>Dostępne akcje</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groupsList.map((group, key) => (
                            <tr className={styles.activerow} key={key}>
                                <td className={styles.textcenter}>{group.name}</td>
                                <td className={styles.textcenter}>{group.dateOfCreation.slice(0, 10)}</td>
                                <td>{group.description}</td>
                                <td className={styles.textcenter}>
                                    <button
                                        className={styles.delete_btn} onClick={() => {
                                            const confirmBox = window.confirm(
                                                "Wszystkie powiązane z tą grupą osoby zostaną usunięte!!! Czy na pewno chcesz usunąć tą grupę?"
                                            )
                                            if (confirmBox === true) {
                                                deleteGroup(group._id)
                                            }
                                        }}
                                    >
                                        Usuń
                                    </button>
                                    <Link to={"/displayGroup/" + group._id}>
                                        <button
                                            className={styles.details_btn} onClick={() => displayGroup(group._id)}>
                                            Szczegóły
                                        </button>
                                    </Link>
                                    <Link to={"/editGroup/" + group._id}>
                                        <button
                                            className={styles.edit_btn} onClick={() => editGroup(group._id)}>
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
                <Link to="/addGroup">
                    <button type="button"
                        className={styles.green_btn_small}>
                        Stwórz grupę
                    </button>
                </Link>
            </div>
        </div>
    )
}
//export default Main
//export default ShowGroups