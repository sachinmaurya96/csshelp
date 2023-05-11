import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Button from './components/pages/Button';
import Shadow from './components/pages/Shadow';
import Card from './components/pages/cards/Card';
import Profilecard from './components/pages/cards/Profilecard';
import Simple from './components/pages/cards/Simple';
import Multiple from './components/pages/cards/Multiple';
import Product from './components/pages/cards/Product';


function App() {
  return (
   <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/button" element={<Button/>}/>
        <Route path="/shadow" element={<Shadow/>}/>
        <Route path="card" element={<Card/>}>
        <Route index element={<Profilecard/>}/>
          <Route path="profile" element={<Profilecard/>}/>
          <Route path="simple" element={<Simple/>}/>
          <Route path="multiple" element={<Multiple/>}/>
          <Route path="product" element={<Product/>}/>
        </Route>
        
  </Routes>
  <Footer/>
  </BrowserRouter>
   </>
  );
}

export default App;


