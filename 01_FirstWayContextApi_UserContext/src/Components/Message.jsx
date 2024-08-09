import { useContext } from "react"
import UserContext from "../Context/UserContext"

function Message() {
    const { user } = useContext(UserContext);

    if (user != null) {
        return (
            <>
                <div className="bg-rose-100">
                    <h1 className="text-xl font-bold">Welcome : {user.username} </h1>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="bg-rose-100">
                <h1 className="text-xl font-bold">Please Login...</h1>
            </div>
        </>
    )
}

export default Message