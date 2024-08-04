import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { Route,createBrowserRouter,RouterProvider,createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home.jsx'
import TrendingBook from './Pages/TrendingBook.jsx'
import NewReleases from './Pages/new-releases/NewReleases.jsx'
import UpcomingBooks from './Pages/UpcomingBooks.jsx'
import FavoriteBooks from './Pages/FavoriteBooks.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="/trending-books" element={<TrendingBook />} />
      <Route path="/new-releases" element={<NewReleases />} />
      <Route path="/upcoming-books" element={<UpcomingBooks />} />
      <Route path="/favorite-boks" element={ <FavoriteBooks/>} />
    </Route>
  )
  
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
