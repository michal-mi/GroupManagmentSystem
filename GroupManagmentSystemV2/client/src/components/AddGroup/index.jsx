import { useState } from "react"
import axios from "axios"
import {Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const AddGroup = () => {
    const [data, setData] = useState({
        name: "",
        dateOfCreation: "",
        description: ""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/groups"
            const { data: res } = await axios.post(url, data)
            navigate("/")
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
    return (
    <div>
        <nav className={styles.navbar}>
            <h1>Tworzenie grupy</h1>
            <Link to="/groups">
                <button
                    className={styles.exit_btn}>
                    Anuluj
                </button>
            </Link>
        </nav>
        <div className={styles.center}><h2>Kreator grupy</h2></div>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nazwa grupy"
                    name="name"
                    onChange={handleChange}
                    value={data.name}
                    className={styles.input}
                />
                <p>
                <div className={styles.special}>Data utworzenia:</div>
                <input
                    type="date"
                    placeholder="Data utworzenia grupy"
                    name="dateOfCreation"
                    onChange={handleChange}
                    value={data.dateOfCreation}
                    className={styles.input1}
                />
                </p>
                <input
                    type="text"
                    placeholder="Opis"
                    name="description"
                    onChange={handleChange}
                    value={data.description}
                    className={styles.input}
                />
                <div class={styles.center}>
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button
                        type="submit" 
                        className={styles.green_btn}>
                        Utwórz grupę
                    </button>
                </div>
            </form>
    </div>
    )
}
export default AddGroup