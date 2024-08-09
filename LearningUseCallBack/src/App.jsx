import { useState, useRef } from 'react'
import MoviesList from './Components/MoviesList';
import { useCallback } from 'react';
import ImplUseMemoAndUseCallBack from './ImplUseMemoAndUseCallBack';


/*
Exercise 1: Focus Input on Button Click
Create a simple form with the following features:

1. An input field where users can type text.
2. A button that, when clicked, focuses the input field.
*/

function App() {
  const top10Movies = [
    "1. The Shawshank Redemption",
    // "2. The Godfather",
    // "3. The Dark Knight",
    // "4. Pulp Fiction : 1",
    // "5. Pulp Fiction : 2",
    // "6. The Lord of the Rings: 1",
    // "7. The Lord of the Rings: 2",
    // "8. The Lord of the Rings: 3",
    // "9. Fight Club",
    // "10. Inception"
  ];

  const [keyword, setkeyWord] = useState("");

  const returnListComponent = useCallback(() => {
    const listElement = [];
    top10Movies.map((item, index) => {
      const neuTralItem = item.toLowerCase();
      if (neuTralItem.includes(keyword)) {
        listElement.push(<MoviesList movieName={item} key={index} />);
      }
    })
    return listElement;
  }, [keyword, setkeyWord])

  return (
    <>
      <div className='bg-gray-500 w-full h-fit flex flex-col items-center justify-center p-12'>
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Top 10 Movies</h1>
          <div className="relative mb-6">
            <input value={keyword} onChange={(e) => setkeyWord(e.target.value)} type="text" placeholder="Search movies..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors" />
          </div>
          <ul className="space-y-4">
            {returnListComponent()}
          </ul>
        </div>
        <ImplUseMemoAndUseCallBack/>
      </div>
    </>
  )
}

export default App
