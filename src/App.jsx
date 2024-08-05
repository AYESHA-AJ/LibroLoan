
import { useReducer, useState } from 'react'
import './App.css'
import Main from './components/Main'
import { BooksContext, ThemeContext } from './context'
import { cartReducer, initialState } from './reducers/CartReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [state,dispatch]=useReducer(cartReducer,initialState)
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <BooksContext.Provider value={{state,dispatch}}>
        <Main />
          <ToastContainer/>
        </BooksContext.Provider>
      </ThemeContext.Provider>
     

    </>
  )
}

export default App
