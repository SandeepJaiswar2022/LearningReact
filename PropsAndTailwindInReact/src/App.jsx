import './App.css'

import MyCard from "./components/MyCard"

function App() {
 const obj1 = {
    name: "Vijay",
    city: "Thane"
  }
 const arr1 = ['Sandeep', 'Sachin', 'Samir', 'Sarit', 'Sagar', 'Sambhit']
  return (
    <>
      <h1 className='text-3xl mb-9 bg-red-600'> Vite + React</h1>
      {/* <MyCard username = "Sandeep" btnTxt = "like" myObject = {obj1} myArr = {arr1}/> 
      We can pass array as well as objects....... as a props
      */}
      <MyCard username="Sandeep" btnTxt="like" />
      <MyCard username="Pankaj" btnTxt="Share" />
      <MyCard username="Pradeep" />
    </>
  )
}

export default App
