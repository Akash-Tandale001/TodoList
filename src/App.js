import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import Todolist from './pages/Todolist';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/todolist" element={<Todolist />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/:pagename" element={<PageNotFound />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;
