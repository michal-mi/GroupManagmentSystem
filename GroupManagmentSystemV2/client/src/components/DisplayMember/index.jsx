import styles from "./styles.module.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { React, useEffect, useState } from "react";

export default function ShowMember() {
    const navigate = useNavigate()
    const [membersList, setMemberList] = useState([])
    const id = window.location.href.slice(-24)
    var memberName = ""
    var memberInfo = ""
    var memberDelButton = ""

    function returnMemberName() {
        membersList.map((member, key) => {
            console.log(member._id)
            console.log(id)
            if (member._id === id) {
                memberName = member.name + " " + member.lastName
            }
        })
        return memberName
    }

    function returnMemberInfo() {
        membersList.map((member, key) => {
            console.log(id)
            if (member._id === id) {
                memberInfo = <div>
                    <table>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><h2 className={styles.center}>Dane podstawowe</h2></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <b>Imię: </b>{member.name}
                            </td>
                            <td>
                                <b>Drugie imię: </b>{member.secondName}
                            </td>
                            <td>
                                <b> Nazwisko: </b>{member.lastName}
                            </td>
                            <td>
                                <b> Data urodzenia: </b>{member.dateOfBirth.slice(0, 10)}
                            </td>
                            <td>
                                <b> Funkcja: </b>{member.function}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <b> Stopień: </b>{member.rank}
                            </td>
                            <td>
                                <b> Numer telefonu: </b>{member.phoneNumber}
                            </td>
                            <td>
                                <b> Adres email: </b>{member.email}
                            </td>
                            <td>
                                <b> Pesel: </b>{member.pesel}
                            </td>
                            <td>
                                <b> Data dołączenia: </b>{member.dateOfJoining.slice(0, 10)}
                            </td>
                        </tr>
                        <tr><td></td>
                            <td></td>
                            <td><h2 className={styles.center}>Dane adresowe</h2></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <b>  Ulica: </b>{member.ADStreet}
                            </td>
                            <td>
                                <b> Numer domu: </b>{member.ADhouseNumber}
                            </td>
                            <td>
                                <b> Numer mieszkania: </b>{member.ADflatNumber}
                            </td>
                            <td>
                                <b> Miasto: </b>{member.ADcity}
                            </td>
                            <td>
                                <b> Kod pocztowy: </b>{member.ADzipCode}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><h2 className={styles.center}>Dane 1. rodzica</h2></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <b> Imię: </b>{member.P1name}
                            </td>
                            <td>
                                <b> Nazwisko: </b>{member.P1lastName}
                            </td>
                            <td>
                                <b> Numer telefonu: </b>{member.P1phoneNumber}
                            </td>
                            <td>
                                <b> Adres e-mail: </b>{member.P1email}
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td><h2 className={styles.center}>Dane 2. rodzica</h2></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <b> Imię: </b>{member.P2name}
                            </td>
                            <td>
                                <b> Nazwisko: </b>{member.P2lastName}
                            </td>
                            <td>
                                <b> Numer telefonu: </b>{member.P2phoneNumber}
                            </td>
                            <td>
                                <b> Adres email: </b>{member.P2email}
                            </td>
                        </tr>
                    </table>
                </div>
            }
        })
        return memberInfo
    }

    function returnMemberDelButton() {
        membersList.map((member, key) => {
            if (member._id === id) {
                memberDelButton = <button
                    className={styles.delete_btn} onClick={() => {
                        const confirmBox = window.confirm(
                            "Osoba zostanie bezpowrotnie usunięta. Kontynować?"
                        )
                        if (confirmBox === true) {
                            deleteMember(member._id)
                        }
                    }}>
                    Usuń
                </button>
            }
        })
        return memberDelButton
    }

    useEffect(() => {
        axios.get("http://localhost:8080/api/members").then((allMembers) => {
            setMemberList(allMembers.data)
        })
    }, [])

    const deleteMember = (id) => {
        axios.delete(`http://localhost:8080/api/members/${id}`).then(() => {
            navigate("/members")
            window.location.reload(false);
        })
    }

    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>Szczegóły {returnMemberName()}</h1>
                <Link to="/members">
                    <button
                        className={styles.exit_btn}>
                        Powrót
                    </button>
                </Link>
                <Link to="/groups_members">
                    <button
                        className={styles.exit_btn}>
                        Lista grupy-osoby
                    </button>
                </Link>
            </nav>

            <div className={styles.center}>
                {returnMemberInfo()}
            </div>
            <br></br>
            <div className={styles.center}>
                {returnMemberDelButton()}
            </div>
        </div>
    )
}