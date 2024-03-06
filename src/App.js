
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './Component/Header/Hero';
import Navbar from './Component/Navbar/Navbar';
import WeddingEvent from './Component/Project_Types/WeddingEvent';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import ScrollToTop from './Component/ScrollToTop';
import Weddingdetails from './Component/Project_Types/Weddingdetails';
import EngagementEvent from './Component/Project_Types/EngagementEvent';


function App() {
  return (

    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/wedding' element={<WeddingEvent />} />
        <Route path='/wedding/:id' element={<Weddingdetails />} />
        <Route path='engagement' element={<EngagementEvent />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
