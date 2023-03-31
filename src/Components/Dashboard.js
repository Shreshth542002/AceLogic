import React,{useState} from "react";
import { navItems } from "../Navitems";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import img1 from '../images/acelogic_logo.png'
import '../Styles/Dashboard.css';
import SignUpPopup from "./SignUpPopup";
import SideBar from "./SideBar";

function Dashboard() {

    const [dropdown,setdropdown] = useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [display,setDisplay] = useState(false);

    return (
    <> 
        <div id="dashboardcontainer">
            <div className='logoName'>
                <i class="fa-solid fa-bars" id="bruh" onMouseEnter={() => setDisplay(!display)}>
                    {/* <SideBar /> */}
                </i>
                <Link to='/'>
                    <img src={img1} alt="Logo" className='logo'></img>
                    <h3 className="Name">AceLogic</h3>
                </Link>
            </div>
            <div id="no-id">
                <ul className='nav-items'> 
                        {navItems.map((item) => {
                            if (item.title==="Courses")
                            {
                                return(
                                    <li key={item.id} className={item.cName} onMouseEnter={()=> setdropdown(true)} onMouseLeave={() =>{setdropdown(false)}} >
                                        <Link to={item.path} id='link1'>{item.title}<i className="fa-solid fa-angle-down"></i></Link>
                                        {dropdown && <Dropdown  />}
                                    </li>
                                )
                            }
                            return( 
                                <li key={item.id} className={item.cName}>
                                    <Link to={item.path} id='link1'>{item.title}</Link>
                                </li>
                            )
                        })}
                </ul>
                <button id="login" onClick={() => setButtonPopup(true)}>Login</button>
            </div>
        </div>
        <SignUpPopup trigger={buttonPopup} setTrigger={setButtonPopup}></SignUpPopup>
    </>
    )
}

export default Dashboard;