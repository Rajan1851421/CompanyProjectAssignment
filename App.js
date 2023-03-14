import Main from './component/Main';
import Navbar from './component/Navbar';
import About from './component/About';
import News from './component/News';
import Specialist from './Specialist';
import { Routes, Route } from 'react-router-dom';
import Service from './component/Service';


function App() {
  return (
    <>
      <Navbar />
     
     


      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/service' element={<About />} />
        <Route path='/about' element={<Service />} />        
        <Route path='/news' element={<News />} />
        <Route path="/special" element={<Specialist />} />
      </Routes>






    </>
  );
}

export default App;
