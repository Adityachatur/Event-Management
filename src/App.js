
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
import Service from './Component/Service/Service';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
import WhatsAppButton from './Component/WhatsAppButton';


function App() {
  return (

    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/wedding' element={<WeddingEvent />} />
        <Route path='/wedding/:id' element={<Weddingdetails />} />
        <Route path='/engagement' element={<EngagementEvent />} />
      </Routes>
      <WhatsAppButton />
      <Footer />
    </>

  );
}

export default App;
