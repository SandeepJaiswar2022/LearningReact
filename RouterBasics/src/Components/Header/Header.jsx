import React from "react"
import { Link, NavLink } from "react-router-dom"

function Header() {
    return (
        <>
            <header className="shadow-lg sticky top-0">
                <nav className="bg-indigo-800 p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Link to="/lll" className="text-white text-2xl font-semibold">RouterBasics</Link>
                        </div>
                        <div className="hidden md:flex space-x-6">
                            <NavLink to="/kkk" className={`text-lg text-gray-200 hover:text-white`}>Home</NavLink>
                            <NavLink to="about" className={`text-lg text-gray-200 hover:text-white`}  >About us</NavLink>
                            <NavLink to="contact" className={`text-lg text-gray-200 hover:text-white`}>Contact us</NavLink>
                            <NavLink to="myGithubData" className={`text-lg text-gray-200 hover:text-white`}>Github</NavLink>
                        </div>
                        <div>
                            <Link to="signup" className="text-white bg-gray-700 hover:bg-gray-950 px-4 py-2 rounded">Login/Register</Link>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header