import React from "react"
import { Link, NavLink } from "react-router-dom"

function Home() {
    return (
        <>
            <section className="bg-gray-200 flex-1">
                <div className="container mx-auto text-center py-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Welcome to Our Website</h1>
                    <p className="text-lg md:text-2xl text-gray-600 mb-8">We are committed to providing the best services for you.</p>
                    <Link href="" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700">Get Started</Link>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feature One</h3>
                            <p className="text-gray-600">Description of feature one. Highlight the benefits and value it provides to users.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feature Two</h3>
                            <p className="text-gray-600">Description of feature two. Explain why it is important and how it helps the users.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Feature Three</h3>
                            <p className="text-gray-600">Description of feature three. Detail the unique aspects and user advantages.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;