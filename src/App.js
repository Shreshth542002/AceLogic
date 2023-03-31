import React from 'react';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import AboutPage from './Components/AboutPage';
// import logo from '../public/images/logo.jpg';
import './App.css';
import ContactPage from './Components/ContactUs_Page';
import DataScience from './Components/Data_Science';
import Home from './Components/Home';
import WebDevelopment from './Components/web_development';
import ScrollToTop from './Components/scrollToTop';
import FeesPap from './Components/Fees&Pap';
import HiringPage from './Components/HiringPage';

function App(){
  return (
    <div className='app'>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route exact path='/' element={<Home />}></Route> 
          <Route path='/Fees&Pap' element={<FeesPap />}></Route>
          <Route path='/Hiring' element={<HiringPage />}></Route>
          <Route path='/Data_Science' element={<DataScience />}></Route>
          <Route path='/Web_Development' element={<WebDevelopment />}></Route>
          <Route path='/ContactUs' element={<ContactPage />}></Route>
          <Route path='/AboutUs' element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;