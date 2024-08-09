

function Contact() {
    return (
        <>
            <div className="bg-gray-100 text-gray-900">
                <header className=" text-center text-white p-4">
                    <h1 className="text-3xl text-green-600 mt-10 font-bold">Contact Us</h1>
                </header>
                <main className="p-8">
                    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                        <p className="text-gray-700">We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.</p>
                    </section>
                    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                        <ul className="text-gray-700">
                            <li><strong>Email:</strong> contact@ourcompany.com</li>
                            <li><strong>Phone:</strong> (123) 456-7890</li>
                            <li><strong>Address:</strong> 123 Main Street, Anytown, USA</li>
                        </ul>
                    </section>
                    <section className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
                        <form action="#" method="post" className="space-y-4">
                            <div>
                                <label for="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label for="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                            </div>
                            <div>
                                <label for="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
                            </div>
                            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">Send Message</button>
                        </form>
                    </section>
                </main>
            </div>
        </>
    )
}

export default Contact;