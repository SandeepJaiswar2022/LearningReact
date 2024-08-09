// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

export const loadGitHubDataUsingLoader = async()=>{
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`);
    return response.json();
}

export function GitHubApi() {

    // const [data,setData] = useState({});

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/hiteshchoudhary`)
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok Error : ', res.statusText);
    //             }
    //             return res.json();
    //         })
    //         .then((jsonData) => {
    //             setData(jsonData);
    //         })
    //         .catch((errorMsg) => {
    //             console.log("Error in fetching Currency Api : ", errorMsg);
    //         })
    // }, [])
    const dataArray = useLoaderData();
    const data = dataArray;
    console.log(data);
    return (
        <>
            <div className="bg-white shadow-md p-6 border-4 border-indigo-700 text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Your Followers : {data.followers}</h2>
                <img src={data.avatar_url} alt="myImage" className="mx-auto" />
            </div>
            <div className="w-full max-w-md mx-auto mb-8">
                <section className="bg-rose-100 shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-xl font-bold mb-4">Recent Followers</h2>
                    <ul className="text-gray-700 space-y-2">
                        <li>Follower 1: <span className="font-medium">John Doe</span></li>
                        <li>Follower 2: <span className="font-medium">Jane Smith</span></li>
                        <li>Follower 3: <span className="font-medium">Sam Brown</span></li>
                    </ul>
                </section>
                <section className="bg-green-100 shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">Explore More</h2>
                    <p className="text-gray-700 mb-4">View more of your followers and connect with them.</p>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">View More Followers</button>
                </section>
            </div>
        </>
    )
}
