import { Route, Routes, Navigate } from "react-router-dom"
import Main from "./components/Main"
import Signup from "./components/Signup"
import Login from "./components/Login"
import AddMember from "./components/AddMember"
import AddGroup from "./components/AddGroup"
import Groups from "./components/Groups"
import Members from "./components/Members"
function App() {
const user = localStorage.getItem("token")
return (
<Routes>
{user && <Route path="/" exact element={<Main />} />}
<Route path="/signup" exact element={<Signup />} />
<Route path="/login" exact element={<Login />} />
<Route path="/" element={<Navigate replace to="/login" />} />
<Route path="/addMember" exact element={<AddMember />} />
<Route path="/addGroup" exact element={<AddGroup />} />
<Route path="/groups" exact element={<Groups />} />
<Route path="/members" exact element={<Members />} />
</Routes>
)
}
export default App