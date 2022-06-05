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

    function validateUsingRegex(){
        let regexName = new RegExp("^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$")
        let regexRank = new RegExp("^[^,;:.!?…]+$")
        let regexPhoneNumber = new RegExp("(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]‌​)\s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)([2-9]1[02-9]‌​|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})")
        let regexPesel = new RegExp(/^[0-9]{11}$/)
        let regexPostalCode = new RegExp('^[0-9]{2}-[0-9]{3}$')
        if(regexName.test(data.name) === true){
            if(regexName.test(data.lastName) === true){
                if(regexRank.test(data.rank) === true){
                    if(regexPhoneNumber.test(data.P1phoneNumber) === true){
                        if(regexPesel.test(data.pesel) === true){
                            if(regexPostalCode.test(data.ADzipCode) === true){
                                return true
                            } else {
                                alert("Nie poprawny kod pocztowy")
                                return false
                            }
                        } else {
                            alert("Nie poprawny numer PESEL")
                            return false
                        }
                    } else {
                        alert("Nie poprawny numer telefonu rodzica")
                        return false
                    }
                } else {
                    alert("Nie poprawny stopień")
                    return false
                }
            } else {
                alert("Nie poprawne nazwisko")
                return false
            }
        } else {
            alert("Nie poprawne imię")
            return false
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateUsingRegex() === true) {
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
                                placeholder="Imię (wymagane)"
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
                                placeholder="Nazwisko  (wymagane)"
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
                            <div className={styles.special}>Data urodzenia (wymagane):</div>
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
                                placeholder="Stopień (wymagane)"
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
                                placeholder="Numer telefonu (z kierunkowym)"
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
                                placeholder="Pesel (wymagane)"
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
                            <div className={styles.special}>Data dołączenia (wymagane): </div>
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
                                placeholder="Ulica (wymagane)"
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
                                placeholder="Numer domu (wymagane)"
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
                                placeholder="Miasto (wymagane)"
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
                                placeholder="Kod pocztowy (wymagane)"
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
                                placeholder="Imię (wymagane)"
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
                                placeholder="Nazwisko (wymagane)"
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
                                placeholder="Numer telefonu (wymagane)(z kierunkowym)"
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
                                placeholder="Adres email (wymagane)"
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
                                placeholder="Numer telefonu (z kierunkowym)"
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