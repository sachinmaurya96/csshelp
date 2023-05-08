import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Button from './components/buttons/Button';
import Cards from './components/cards/Cards';
import Shadow from './components/shadows/Shadow';
import Nav from './components/navbars/Nav';

function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/button" element={<Button/>}/>
        <Route path="/card" element={<Cards/>}/>
        <Route path="/shadow" element={<Shadow/>}/>
        <Route path="/nav" element={<Nav/>}/>
      
    </Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
   </>
  );
}

export default App;
