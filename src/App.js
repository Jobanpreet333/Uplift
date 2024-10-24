import './App.css';
import Navbar from './components/Navbar';
import Middle from './components/Middle';
import Login from './components/Login';
import Sign from './components/Sign';
import Need from './components/NeedHelp'
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    
      <BrowserRouter>
      <Navbar />

        <Routes>
          <Route path="/" element={<Middle/>} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/sign" element={<Sign />} />
          <Route exact path="/needhelp" element={<Need />} />
        </Routes>
      </BrowserRouter>

    </>
  )

}

export default App;
