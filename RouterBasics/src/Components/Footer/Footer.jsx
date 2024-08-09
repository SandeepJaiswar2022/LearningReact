import React from "react"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <footer className="bg-indigo-800 text-white py-6">
            <div className="container mx-auto text-center">
                <p className="text-lg">&copy; 2024 Company Name. All rights reserved.</p>
                <div className="mt-4 space-x-6">
                    <Link to="#" className="hover:text-white">Privacy Policy</Link>
                    <Link to="#" className="hover:text-white">Terms of Service</Link>
                    <Link to="contact" className="hover:text-white">Contact Us</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;