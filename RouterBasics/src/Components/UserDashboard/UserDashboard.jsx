import { Link, useParams } from "react-router-dom";
function UserDashboard() {
    const { userId } = useParams();
    return (
        <>
            <div className="bg-gray-100 text-gray-900">
                <main className="p-8">
                    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 className="bg-rose-100 text-2xl font-bold mb-4">Welcome, {userId} </h2>
                        <p className="text-gray-700">This is your dashboard where you can manage your account and view your activities.</p>
                    </section>
                    <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Recent Activities</h2>
                        <ul className="text-gray-700">
                            <li className="mb-2">Activity 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li className="mb-2">Activity 2: Vestibulum at eros in libero tristique imperdiet.</li>
                            <li className="mb-2">Activity 3: Curabitur vitae magna nec urna fermentum bibendum.</li>
                        </ul>
                    </section>
                    <section className="bg-white shadow-md rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
                        <p className="text-gray-700">Update your account information and preferences.</p>
                        <Link to="" className="text-blue-600 hover:underline">Go to Settings</Link>
                    </section>
                </main>
            </div>
        </>
    )
}

export default UserDashboard;