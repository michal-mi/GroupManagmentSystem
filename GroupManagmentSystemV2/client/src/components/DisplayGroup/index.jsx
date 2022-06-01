import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

const groups = "http://localhost:8080/api/groups";
//import axios from "axios";
console.log(groups)

//const Main = () => {
export default function ShowGroups(){
    const [groupsList, setGroupList] = useState([])

    const deleteGroup = (id) => {
        axios.delete(`http://localhost:8080/api/groups/${id}`).then(() => {
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
<h1>Informacje o grupie</h1>
<Link to="/members">
<button
    className={styles.exit_btn}>
    Wróć
</button>
</Link>
</nav>

<div class={styles.center}>
<table class={styles.styledtable}>
    <thead>
        <tr>
        <th>Nazwa</th>
        <th>Data utworzenia</th>
        <th>Opis</th>
        <th>Usuwanie</th>
        </tr>
    </thead>
    <tbody>
        {groupsList.map((group, key) => (
        <tr class={styles.activerow} key={key}>
        <td>{group.name}</td>
        <td>{group.dateOfCreation}</td>
        <td>{group.description}</td>
        <td><button
            className={styles.delete_btn} onClick={() => deleteGroup(group._id)}>
            Usuń
        </button></td>
        </tr>
        ))
        }
    </tbody>
 </table>
</div>
</div>
)
}
//export default Main
//export default ShowGroups