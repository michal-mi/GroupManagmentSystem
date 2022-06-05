import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { React, useEffect, useState } from "react";

export default function ShowMember() {

    const navigate = useNavigate()
    const id = window.location.href.slice(-24)
    const [error, setError] = useState("")
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
    const [membersList, setmemberList] = useState([])
    const [groupsList, setGroupList] = useState([])
    const [memberGroupID, setMemberGroupID] = useState()
    const [memberName, setMemberName] = useState()
    const [memberSecondName, setMemberSecondName] = useState()
    const [memberLastName, setMemberLastName] = useState()
    const [memberDateOfBirth, setMemberDateOfBirth] = useState()
    const [memberFunction, setMemberFunction] = useState()
    const [memberRank, setMemberRank] = useState()
    const [memberPhoneNumber, setMemberPhoneNumber] = useState()
    const [memberEmail, setMemberEmail] = useState()
    const [memberPESEL, setMemberPESEL] = useState()
    const [memberDateOfJoining, setMemberDateOfJoining] = useState()
    const [memberADstreet, setMemberADstreet] = useState()
    const [memberADhouseNumber, setMemberADhouseNumber] = useState()
    const [memberADflatNumber, setMemberADflatNumber] = useState()
    const [memberADcity, setMemberADcity] = useState()
    const [memberADzipCode, setMemberADzipCode] = useState()
    const [memberP1name, setMemberP1name] = useState()
    const [memberP1lastName, setMemberP1lastName] = useState()
    const [memberP1phoneNumber, setMemberP1phoneNumber] = useState()
    const [memberP1email, setMemberP1email] = useState()
    const [memberP2name, setMemberP2name] = useState()
    const [memberP2lastName, setMemberP2lastName] = useState()
    const [memberP2phoneNumber, setMemberP2phoneNumber] = useState()
    const [memberP2email, setMemberP2email] = useState()
    var memberDelButton = ""

    function setEdition() {
        setMemberGroupID(returnMemberGroupID())
        setMemberName(returnMemberName())
        setMemberSecondName(returnMemberSecondName())
        setMemberLastName(returnMemberLastName())
        setMemberDateOfBirth(returnMemberDateOfBirth().slice(0, 10))
        setMemberFunction(returnMemberFunction())
        setMemberRank(returnMemberRank())
        setMemberPhoneNumber(returnMemberPhoneNumber())
        setMemberEmail(returnMemberEmail())
        setMemberPESEL(returnMemberPESEL())
        setMemberDateOfJoining(returnMemberDateOfJoining().slice(0, 10))
        setMemberADstreet(returnMemberADstreet())
        setMemberADhouseNumber(returnMemberADhouseNumber())
        setMemberADflatNumber(returnMemberADflatNumber())
        setMemberADcity(returnMemberADcity())
        setMemberADzipCode(returnMemberADzipCode())
        setMemberP1name(returnMemberP1name())
        setMemberP1lastName(returnMemberP1lastName())
        setMemberP1phoneNumber(returnMemberP1phoneNumber())
        setMemberP1email(returnMemberP1email())
        setMemberP2name(returnMemberP2name())
        setMemberP2lastName(returnMemberP2lastName())
        setMemberP2phoneNumber(returnMemberP2phoneNumber())
        setMemberP2email(returnMemberP2email())

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        data.groupID = memberGroupID
        data.name = memberName
        data.secondName = memberSecondName
        data.lastName = memberLastName
        data.dateOfBirth = memberDateOfBirth
        data.function = memberFunction
        data.rank = memberRank
        data.phoneNumber = memberPhoneNumber
        data.email = memberEmail
        data.PESEL = memberPESEL
        data.dateOfJoining = memberDateOfJoining
        data.ADstreet = memberADstreet
        data.ADhouseNumber = memberADhouseNumber
        data.ADflatNumber = memberADflatNumber
        data.ADcity = memberADcity
        data.ADzipCode = memberADzipCode
        data.P1name = memberP1name
        data.P1lastName = memberP1lastName
        data.P1phoneNumber = memberP1phoneNumber
        data.P1email = memberP1email
        data.P2name = memberP2name
        data.P2lastName = memberP2lastName
        data.P2phoneNumber = memberP2phoneNumber
        data.P2email = memberP2email
        try {
            const url = `http://localhost:8080/api/members/${id}`
            const { data: res } = await axios.post(url, data)
            navigate("/members")
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

    function returnMemberGroupID() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.groupID }
        })
        return temp
    }

    function returnMemberName() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.name }
        })
        return temp
    }

    function returnMemberSecondName() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.secondName }
        })
        return temp
    }

    function returnMemberLastName() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.lastName }
        })
        return temp
    }

    function returnMemberDateOfBirth() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.dateOfBirth }
        })
        return temp
    }

    function returnMemberFunction() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.function }
        })
        return temp
    }

    function returnMemberRank() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.rank }
        })
        return temp
    }

    function returnMemberPhoneNumber() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.phoneNumber }
        })
        return temp
    }

    function returnMemberEmail() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.email }
        })
        return temp
    }

    function returnMemberPESEL() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.PESEL }
        })
        return temp
    }

    function returnMemberDateOfJoining() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.dateOfJoining }
        })
        return temp
    }

    function returnMemberADstreet() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.ADstreet }
        })
        return temp
    }

    function returnMemberADhouseNumber() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.ADhouseNumber }
        })
        return temp
    }

    function returnMemberADflatNumber() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.ADflatNumber }
        })
        return temp
    }

    function returnMemberADcity() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.ADcity }
        })
        return temp
    }

    function returnMemberADzipCode() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.ADzipCode }
        })
        return temp
    }

    function returnMemberP1name() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.P1name }
        })
        return temp
    }

    function returnMemberP1lastName() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.P1lastName }
        })
        return temp
    }

    function returnMemberP1phoneNumber() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.P1phoneNumber }
        })
        return temp
    }

    function returnMemberP1email() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.P1email }
        })
        return temp
    }

    function returnMemberP2name() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.P2name }
        })
        return temp
    }

    function returnMemberP2lastName() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.P2lastName }
        })
        return temp
    }

    function returnMemberP2phoneNumber() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.P2phoneNumber }
        })
        return temp
    }

    function returnMemberP2email() {
        var temp
        membersList.map((member, key) => {
            if (member._id === id) { temp = member.P2email }
        })
        return temp
    }

    function returnMemberDelButton() {
        membersList.map((member, key) => {
            if (member._id === id) {
                memberDelButton = <button
                    className={styles.delete_btn} onClick={() => deleteMember(member._id)}>
                    Usuń członka
                </button>
            }
        })
        return memberDelButton
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/members").then((allMembers) => {
            setmemberList(allMembers.data)
        })
        axios.get("http://localhost:8080/api/groups").then((allGroups) => {
            setGroupList(allGroups.data)
        })
        data.groupID = memberGroupID
    })

    const deleteMember = (id) => {
        axios.delete(`http://localhost:8080/api/members/${id}`).then(() => {
            navigate("/members")
            window.location.reload(false);
        })
    }

    return (
        <div className={styles.main_container}>

            <nav className={styles.navbar}>
                <h1>Edytowanie {returnMemberName() + " " + returnMemberLastName()}</h1>
                <Link to="/members">
                    <button
                        className={styles.exit_btn}>
                        Powrót
                    </button>
                </Link>
            </nav>

            <div className={styles.center}><h1>Edytor członka</h1></div>

            <div className={styles.center}>
                <button className={styles.start_edit_btn} onClick={() => setEdition()}>
                    Potwierdź kontynuowanie zmiany danych!
                </button>
            </div>

            <div className={styles.center}><h2>Podstawowe dane</h2></div>
            <form className={styles.form_container} onSubmit={handleSubmit}>
                <label for="groups" className={styles.center}></label>
                <div className={styles.center}>
                    <select className={styles.my_select_menu} onChange={(e) => setMemberGroupID(e.target.value)} value={memberGroupID} >
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

                <input
                    type="text"
                    placeholder="Imię"
                    name="name"
                    onChange={(e) => setMemberName(e.target.value)}
                    value={memberName}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Drugie imię"
                    name="secondName"
                    onChange={(e) => setMemberSecondName(e.target.value)}
                    value={memberSecondName}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Nazwisko"
                    name="description"
                    onChange={(e) => setMemberLastName(e.target.value)}
                    value={memberLastName}
                    className={styles.input}
                />
                <p>
                    <div className={styles.special}>Data urodzenia:</div>
                    <input
                        type="date"
                        placeholder="Data urodzenia"
                        name="dateOfBirth"
                        onChange={(e) => setMemberDateOfBirth(e.target.value)}
                        value={memberDateOfBirth}
                        className={styles.input1}
                    />
                </p>
                <input
                    type="text"
                    placeholder="Funkcja"
                    name="function"
                    onChange={(e) => setMemberFunction(e.target.value)}
                    value={memberFunction}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Stopień"
                    name="rank"
                    onChange={(e) => setMemberRank(e.target.value)}
                    value={memberRank}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Telefon"
                    name="phoneNumber"
                    onChange={(e) => setMemberPhoneNumber(e.target.value)}
                    value={memberPhoneNumber}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => setMemberEmail(e.target.value)}
                    value={memberEmail}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Pesel"
                    name="PESEL"
                    onChange={(e) => setMemberPESEL(e.target.value)}
                    value={memberPESEL}
                    className={styles.input}
                />
                <p>
                    <div className={styles.special}>Data dołączenia:</div>
                    <input
                        type="date"
                        placeholder="Data dołączenia"
                        name="dateOfJoining"
                        onChange={(e) => setMemberDateOfJoining(e.target.value)}
                        value={memberDateOfJoining}
                        className={styles.input1}
                    />
                </p>
                <div className={styles.center}><h2>Dane adresowe</h2></div>
                <input
                    type="text"
                    placeholder="Ulica"
                    name="street"
                    onChange={(e) => setMemberADstreet(e.target.value)}
                    value={memberADstreet}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Numer mieszkania"
                    name="flatNumber"
                    onChange={(e) => setMemberADflatNumber(e.target.value)}
                    value={memberADflatNumber}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Miasto"
                    name="city"
                    onChange={(e) => setMemberADcity(e.target.value)}
                    value={memberADcity}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Kod pocztowy"
                    name="zipCode"
                    onChange={(e) => setMemberADzipCode(e.target.value)}
                    value={memberADzipCode}
                    className={styles.input}
                />
                <div className={styles.center}><h2>Dane pierwszego rodzica</h2></div>
                <input
                    type="text"
                    placeholder="Imię rodzica nr.1"
                    name="parent1Name"
                    onChange={(e) => setMemberP1name(e.target.value)}
                    value={memberP1name}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Nazwisko rodzica nr. 1"
                    name="parent1LastName"
                    onChange={(e) => setMemberP1lastName(e.target.value)}
                    value={memberP1lastName}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Telefon rodzica nr. 1"
                    name="parent1PhoneNumber"
                    onChange={(e) => setMemberP1phoneNumber(e.target.value)}
                    value={memberP1phoneNumber}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Email rodzica nr. 1"
                    name="parent1Email"
                    onChange={(e) => setMemberP1email(e.target.value)}
                    value={memberP1email}
                    className={styles.input}
                />
                <div className={styles.center}><h2>Dane drugiego rodzica</h2></div>
                <input
                    type="text"
                    placeholder="Imię rodzica nr.2"
                    name="parent2Name"
                    onChange={(e) => setMemberP2name(e.target.value)}
                    value={memberP2name}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Nazwisko rodzica nr. 2"
                    name="parent2LastName"
                    onChange={(e) => setMemberP2lastName(e.target.value)}
                    value={memberP2lastName}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Telefon rodzica nr. 2"
                    name="parent2PhoneNumber"
                    onChange={(e) => setMemberP2phoneNumber(e.target.value)}
                    value={memberP2phoneNumber}
                    className={styles.input}
                />
                <input
                    type="text"
                    placeholder="Email rodzica nr. 2"
                    name="parent2Email"
                    onChange={(e) => setMemberP2email(e.target.value)}
                    value={memberP2email}
                    className={styles.input}
                />

                <div className={styles.center}>
                    {returnMemberDelButton()}
                </div>
                <div class={styles.center}>
                    {error && <div className={styles.error_msg}>{error}</div>}
                    <button
                        type="submit"
                        className={styles.green_btn}>
                        Zapisz zmianę danych
                    </button>
                </div>
            </form>
        </div>
    )
}