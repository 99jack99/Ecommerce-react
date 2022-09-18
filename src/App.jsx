import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Home from './containers/Home/Home'
import Login from './containers/User/Login/Login'
import Signup from './containers/User/Signup/Signup'
import Profile from './containers/User/Profile/Profile'

import './App.scss'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>

        <Route path="/" element={<Home/>}/>  
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>   
        <Route path="/profile" element={<Profile/>}/>   

        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
