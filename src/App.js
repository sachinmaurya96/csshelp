import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Button from './components/pages/Button';
import Shadow from './components/pages/Shadow';


function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route>
        <Route path="/" element={<Home/>}/>
        <Route path="/button" element={<Button/>}/>
        <Route path="/shadow" element={<Shadow/>}/>
    </Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
   </>
  );
}

export default App;


