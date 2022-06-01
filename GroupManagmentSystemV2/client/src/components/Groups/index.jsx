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

    const displayGroup = (id) => {
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

<div class={styles.center}>
<Link to="/addGroup">
<button type="button" 
 className={styles.green_btn}>
     Stwórz grupę
</button>
</Link>
</div>
<div class={styles.center}>
<table class={styles.styledtable}>
    <thead>
        <tr>
        <th>Nazwa</th>
        <th>Data utworzenia</th>
        <th>Opis</th>
        <th>Dostępne akcje</th>
        </tr>
    </thead>
    <tbody>
        {groupsList.map((group, key) => (
        <tr class={styles.activerow} key={key}>
        <td>{group.name}</td>
        <td>{group.dateOfCreation}</td>
        <td>{group.description}</td>
        <td>
            <button
            className={styles.delete_btn} onClick={() => deleteGroup(group._id)}>
            Usuń
            </button>
            <Link to={"/displayGroup/"+group._id}>
            <button
            className={styles.details_btn} onClick={() => displayGroup(group._id)}>
            Szczegóły
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