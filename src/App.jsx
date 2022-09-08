import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import Home from './containers/Home/Home'

import './App.scss'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
        </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
