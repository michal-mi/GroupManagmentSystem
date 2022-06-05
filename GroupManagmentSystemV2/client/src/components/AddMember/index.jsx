import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
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
        pesel: "",
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
    const [groupsList, setGroupList] = useState([])
    const [selectID, setSelectID] = useState()
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
            alert(res.message)
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

    function displayForm() {
        if (groupsList.length === 0) {
            return <div><h1><b className={styles.center}>BRAK GRUP!!</b></h1><div className={styles.center}>Aby stworzyć osobę najpierw musisz stworzyć grupę!</div>
            </div>
        }
        if (selectID !== undefined) {
            return <form className={styles.form_container} onSubmit={handleSubmit}>
                <table>
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
                                placeholder="Data urodzenia"
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
                                type="email"
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
                                placeholder="Pesel"
                                name="pesel"
                                onChange={handleChange}
                                value={data.pesel}
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
                                type="email"
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
                                type="email"
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
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/groups").then((allGroups) => {
            setGroupList(allGroups.data)
        })

        if (selectID !== undefined) {
            if (selectID.length <= 24) {
                data.groupID = selectID
            }

        }
    })

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

            <label for="groups" className={styles.center}> Najpierw wybierz grupę do której chcesz przypisać osobę:</label>
            <div className={styles.center}>
                <select className={styles.my_select_menu} onChange={(e) => setSelectID(e.target.value)} value={selectID} >
                    <option>
                        Wybierz grupę z poniższych
                    </option>
                    {groupsList.map((group, key) => (
                        <option value={group._id}>
                            {group.name}
                        </option>
                    ))}
                </select>
            </div>
            <br></br>
            {displayForm()}
        </div >
    )
}
export default AddMember