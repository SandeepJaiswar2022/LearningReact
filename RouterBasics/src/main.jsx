import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Signup from './Components/Signup/Signup.jsx'
import UserDashboard from './Components/UserDashboard/UserDashboard.jsx'
import { GitHubApi, loadGitHubDataUsingLoader } from './Components/GitHubApi/GitHubApi.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,

//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       },
//       {
//         path: 'signup',
//         element: <Signup />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='signup' element={<Signup />}></Route>
      <Route loader={loadGitHubDataUsingLoader} path='myGithubData' element={<GitHubApi />}></Route>
      <Route path='userdashboard/:userId' element={<UserDashboard />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
