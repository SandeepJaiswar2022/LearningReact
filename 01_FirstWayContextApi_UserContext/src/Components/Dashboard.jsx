import Login from "./Login"
import Message from "./Message"
import UseContextProvider from "../Context/UserContextProvider"
function Dashboard() {
    return (
        <UseContextProvider>
            <Login />
            <Message />
        </UseContextProvider>
    )
}

export default Dashboard