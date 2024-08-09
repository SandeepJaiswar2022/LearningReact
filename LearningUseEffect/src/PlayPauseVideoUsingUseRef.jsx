import { useRef } from 'react'

/*
Exercise 5: Video Player Controls
Create a video player component with the following features:

1. A video element.
2. Play and pause buttons that control the video playback.
*/

function PlayPauseVideoUsingUseRef() {
    const videoTagRef = useRef(null);

    const playVideo = () => {
        videoTagRef.current?.play();
    }
    const pauseVideo = () => {
        videoTagRef.current?.pause();
    }

    return (
        <>
            <div className="w-96 h-fit  space-y-3 border bg-indigo-200 m-6 p-6">
                <h2>Exercise 2: Persist Previous State Value</h2>
                <div class="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden shadow-lg">
                    <video ref={videoTagRef} class="w-full h-full" controls>
                        <source src="myVideo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="m-10 rounded-lg shadow-sm">
                    <button onClick={playVideo} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Play </button>
                    <button onClick={pauseVideo} type="button" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Pause</button>
                </div>
            </div>
        </>
    )
}

export default PlayPauseVideoUsingUseRef;
