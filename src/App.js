import './App.css';
import Head from './Components/Head'
import Card from './Components/Card';
import DataViewer from './Components/DataViewer';
import Home from './Pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Head />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // <div>
    //   <Head />
    //   <Home />
    // </div>
  );
}

export default App;
