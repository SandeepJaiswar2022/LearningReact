import React from "react"
import { Link, NavLink } from "react-router-dom"

function About() {
    return (
        <>
            <div className="bg-gray-100 text-gray-900">
                <header className=" text-center text-white p-4">
                    <h1 className="text-3xl text-green-600 mt-10 font-bold">About Us</h1>
                </header>
                <main className="p-8">
                    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                        <p className="text-gray-700">Our mission is to provide the best services to our customers and to make a positive impact in the community. We strive for excellence in everything we do and are committed to continuous improvement.</p>
                    </section>
                    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Our History</h2>
                        <p className="text-gray-700">Founded in 2010, our company has grown from a small startup to a leading player in the industry. Over the years, we have achieved numerous milestones and have been recognized for our innovation and customer-centric approach.</p>
                    </section>
                    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                        <p className="text-gray-700">We have a diverse and talented team of professionals who are passionate about what they do. Our team members bring a wealth of experience and expertise to the table, and work collaboratively to achieve our goals.</p>
                    </section>
                </main>
            </div>
        </>
    )
}

export default About;