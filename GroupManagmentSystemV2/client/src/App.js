import { Route, Routes, Navigate } from "react-router-dom"

import Main from "./components/Main"
import Signup from "./components/Signup"
import Login from "./components/Login"

import Members from "./components/Members"
import AddMember from "./components/AddMember"
import DisplayMember from "./components/DisplayMember"
import EditMember from "./components/EditMember"

import Groups from "./components/Groups"
import AddGroup from "./components/AddGroup"
import DisplayGroup from "./components/DisplayGroup"
import EditGroup from "./components/EditGroup"

import Groups_members from "./components/Groups_members"

function App() {
const user = localStorage.getItem("token")
return (
<Routes>
{user && <Route path="/" exact element={<Main />} />}
<Route path="/signup" exact element={<Signup />} />
<Route path="/login" exact element={<Login />} />
<Route path="/" element={<Navigate replace to="/login" />} />

<Route path="/members" exact element={<Members />} />
<Route path="/addMember" exact element={<AddMember />} />
<Route path="/displayMember/:id" exact element={<DisplayMember />} />
<Route path="/editMember/:id" exact element={<EditMember />} />

<Route path="/groups" exact element={<Groups />} />
<Route path="/addGroup" exact element={<AddGroup />} />
<Route path="/displayGroup/:id" exact element={<DisplayGroup />} />
<Route path="/editGroup/:id" exact element={<EditGroup />} />

<Route path="/groups_members" exact element={<Groups_members />} />
</Routes>
)
}
export default App