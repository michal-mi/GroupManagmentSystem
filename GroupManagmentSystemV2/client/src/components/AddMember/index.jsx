import { useState } from "react"
import axios from "axios"
import {Link, useNavigate } from "react-router-dom"
import styles from "./styles.module.css"

const AddMember = () => {
    const [data, setData] = useState({
        groupID: "",
        name: "",
        secondName: "",
        lastName: "",
        dateOfBirth: "",
        function: "",
        rank: "",
        phoneNumber: "",
        email: "",
        PESEL: "",
        dateOfJoining: "",
        ADstreet: "",
        ADhouseNumber: "",
        ADflatNumber: "",
        ADcity: "",
        ADzipCode: "",
        P1name: "",
        P1lastName: "",
        P1phoneNumber: "",
        P1email: "",
        P2name: "",
        P2lastName: "",
        P2phoneNumber: "",
        P2email: ""
    })
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const url = "http://localhost:8080/api/members"
            const { data: res } = await axios.post(url, data)
            navigate("/members")
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
<h1>Dodawanie osoby</h1>
<Link to="/members">
<button
    className={styles.exit_btn}>
    Anuluj
</button>
</Link>
</nav>
            <div className={styles.center}><h2>Podstawowe dane</h2></div>
            <form className={styles.form_container} onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            placeholder="ID grupy"
                            name="groupID"
                            onChange={handleChange}
                            value={data.groupID}
                            className={styles.input}
                        />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="text"
                            placeholder="Imię"
                            name="name"
                            onChange={handleChange}
                            value={data.name}
                            required
                            className={styles.input}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Drugie imię"
                            name="secondName"
                            onChange={handleChange}
                            value={data.secondName}
                            className={styles.input}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Nazwisko"
                            name="lastName"
                            onChange={handleChange}
                            value={data.lastName}
                            required
                            className={styles.input}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className={styles.special}>Data urodzenia:</div>
                        <input
                            type="date"
                            placeholder="Wiek"
                            name="dateOfBirth"
                            onChange={handleChange}
                            value={data.dateOfBirth}
                            required
                            className={styles.input1}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Funkcja"
                            name="function"
                            onChange={handleChange}
                            value={data.function}
                            className={styles.input}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Stopień"
                            name="rank"
                            onChange={handleChange}
                            value={data.rank}
                            required
                            className={styles.input}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input
                            type="text"
                            placeholder="Numer telefonu"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={data.phoneNumber}
                            className={styles.input}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="Adres email"
                            name="email"
                            onChange={handleChange}
                            value={data.email}
                            className={styles.input}
                        />
                    </td>
                    <td>
                        <input
                            type="text"
                            placeholder="PESEL"
                            name="PESEL"
                            onChange={handleChange}
                            value={data.PESEL}
                            required
                            className={styles.input}
                        />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <div className={styles.special}>Data dołączenia: </div>
                        <input
                            type="date"
                            placeholder="Data dołączenia"
                            name="dateOfJoining"
                            onChange={handleChange}
                            value={data.dateOfJoining}
                            required
                            className={styles.input1}
                        />
                    </td>
                    <td></td>
                </tr>
                <tr><td></td>
                    <td><h2 className={styles.center}>Dane adresowe</h2></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                    <input
                        type="text"
                        placeholder="Ulica"
                        name="ADstreet"
                        onChange={handleChange}
                        value={data.ADstreet}
                        required
                        className={styles.input}
                    />
                    </td>
                    <td>
                    <input
                        type="text"
                        placeholder="Numer domu"
                        name="ADhouseNumber"
                        onChange={handleChange}
                        value={data.ADhouseNumber}
                        required
                        className={styles.input}
                    />
                    </td>
                    <td>
                    <input
                        type="text"
                        placeholder="Numer mieszkania"
                        name="ADflatNumber"
                        onChange={handleChange}
                        value={data.ADflatNumber}
                        className={styles.input}
                    />
                    </td>
                </tr>
                <tr>
                    <td>
                    <input
                        type="text"
                        placeholder="Miasto"
                        name="ADcity"
                        onChange={handleChange}
                        value={data.ADcity}
                        required
                        className={styles.input}
                    />
                    </td>
                    <td>
                    <input
                        type="text"
                        placeholder="Kod pocztowy"
                        name="ADzipCode"
                        onChange={handleChange}
                        value={data.ADzipCode}
                        required
                        className={styles.input}
                    />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><h2 className={styles.center}>Dane pierwszego rodzica</h2></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                    <input
                        type="text"
                        placeholder="Imię"
                        name="P1name"
                        onChange={handleChange}
                        value={data.P1name}
                        required
                        className={styles.input}
                    />
                    </td>
                    <td>
                    <input
                        type="text"
                        placeholder="Nazwisko"
                        name="P1lastName"
                        onChange={handleChange}
                        value={data.P1lastName}
                        required
                        className={styles.input}
                    />
                    </td>
                    <td>
                    <input
                        type="text"
                        placeholder="Numer telefonu"
                        name="P1phoneNumber"
                        onChange={handleChange}
                        value={data.P1phoneNumber}
                        required
                        className={styles.input}
                    />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <input
                        type="text"
                        placeholder="Adres email"
                        name="P1email"
                        onChange={handleChange}
                        value={data.P1email}
                        required
                        className={styles.input}
                    />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td><h2 className={styles.center}>Dane drugiego rodzica</h2></td>
                    <td></td>
                </tr>
                <tr>
                    <td>
                    <input
                        type="text"
                        placeholder="Imię"
                        name="P2name"
                        onChange={handleChange}
                        value={data.P2name}
                        className={styles.input}
                    />
                    </td>
                    <td>
                    <input
                        type="text"
                        placeholder="Nazwisko"
                        name="P2lastName"
                        onChange={handleChange}
                        value={data.P2lastName}
                        className={styles.input}
                    />
                    </td>
                    <td>
                    <input
                        type="text"
                        placeholder="Numer telefonu"
                        name="P2phoneNumber"
                        onChange={handleChange}
                        value={data.P2phoneNumber}
                        className={styles.input}
                    />
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <input
                        type="text"
                        placeholder="Adres email"
                        name="P2email"
                        onChange={handleChange}
                        value={data.P2email}
                        className={styles.input}
                    />
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td class={styles.center}>
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button
                        type="submit" 
                        className={styles.green_btn}>
                        Dodaj członka
                    </button>
                    </td>
                    <td></td>
                </tr>
                </table>
            </form>
        </div>
    )
}
export default AddMember