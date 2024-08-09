import { Link } from "react-router-dom";

function Signup() {
    return (
        <>
            <div className="bg-gray-100 text-gray-900 flex items-center justify-center min-h-screen">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md border-4 border-black">
                    <h1 className="text-2xl font-bold mb-8">Sign up to create an account</h1>
                    <form action="#" method="post" className="space-y-4">
                        <div>
                            <label for="fullname" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="fullname" name="fullname" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label for="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                            <input type="email" id="email" name="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                        </div>
                        <div>
                            <label for="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" name="password" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md">Create Account</button>
                    </form>
                    <p className="text-xl mt-4">Already have an account? <Link to="#" className="text-indigo-600 hover:underline">Sign In</Link></p>
                </div>
            </div>
        </>
    )
}

export default Signup;