import styles from "./styles.module.css"
import { Link } from "react-router-dom"
const Main = () => {
const handleLogout = () => {
localStorage.removeItem("token")
window.location.reload()
}

return (
<div className={styles.main_container}>
<nav className={styles.navbar}>
<h1>Strona główna</h1>
<button className={styles.white_btn} onClick={handleLogout}>
Wyloguj się
</button>
</nav>

<div class={styles.center}>
<Link to="/groups">
<button type="button" 
 className={styles.green_btn}>
     Spis grup
</button>
</Link>
</div>

<div class={styles.center}>
<Link to="/members">
<button type="button" 
 className={styles.green_btn}>
     Spis osób
</button>
</Link>

</div>
</div>
)
}
export default Main