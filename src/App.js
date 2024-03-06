
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Component/Header/Hero';
import Navbar from './Component/Navbar/Navbar';
import WeddingEvent from './Component/Project_Types/WeddingEvent';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';


function App() {
  return (

    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/wedding' element={<WeddingEvent />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
