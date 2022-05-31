import styles from "./styles.module.css"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShowMembers(){
    const [membersList, setMembersList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/api/members").then((allMembers) => {
            setMembersList(allMembers.data)
        })
    }, []) 

const handleLogout = () => {
localStorage.removeItem("token")
window.location.reload()
}

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
<table>
    <thead>
        <tr>
        <th>Imię</th>
        <th>Naziwsko</th>
        <th>Grupa</th>
        <th>Data urodzenia</th>
        <th>Funkcja</th>
        </tr>
    </thead>
    <tbody>
        {membersList.map((member, key) => (
        <tr key={key}>
        <td>{member.name}</td>
        <td>{member.lastName}</td>
        <td>{member.groupID}</td>
        <td>{member.dateOfBirth}</td>
        <td>{member.function}</td>
        </tr>
        ))
        }
    </tbody>
 </table>
</div>
</div>
)
}