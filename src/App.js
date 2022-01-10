import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Todolist from './pages/Todolist';
import About from './pages/About';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  // const [token, setToken] = useState()
  // if(!token) {
  //   return <Login  />
  // }
 
  return (
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login  setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/todolist" element={<Todolist isLoggedIn={isLoggedIn}/>}/>
      <Route path="/about" element={<About />}/>
      <Route path="/:pagename" element={<PageNotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
