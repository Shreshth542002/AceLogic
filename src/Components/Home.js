import React,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import Contact from './Contact';
import Outline from './courseOutline';
import Programs from './programs';
import '../Styles/Home.css';
import HomePageForm from './HomePageForm';
import Dashboard from './Dashboard';
import Moto from './Moto';
import '../Styles/Home.css';
import Whatsapp from './Whatsapp';

function Home() {

    const [popup,setPopup] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPopup(false);
        },4000);
    }, []);

    return (
        <>
            <div className='Home'>
                <div className='nav-container'>
                    <Dashboard />
                    <Moto />
                </div>
                {/* <Navbar /> */}
                <Link to='/web_development'  id='any'>
                    <button id='get-started-btn'>Start your Journey</button>
                </Link>
                <Popup trigger={popup} setTrigger={setPopup}></Popup>
                <Programs />
                <HomePageForm />
                <Outline />
                <div id='demo'></div>
                <Contact />
                <Whatsapp />
            </div>
        </>
    )
}

export default Home;