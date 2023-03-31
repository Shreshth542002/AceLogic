import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { navItems } from "../Navitems";
import '../Styles/SideBar.css'
import Dropdown from './Dropdown';

function SideBar({sidebar}) {

    const [dropdown,setDropdown] = useState(false);

    return (
        <>
            <ul className='side--list'> 
                        {navItems.map((item) => {
                            if (item.title==="Courses")
                            {
                                return(
                                    <li key={item.id} className="side--nav" onClick={() => setDropdown(!dropdown)} >
                                        <Link to={item.path} id='link1'>{item.title}<i className="fa-solid fa-angle-down"></i></Link>
                                        {dropdown && <Dropdown  />}
                                    </li>
                                )
                            }
                            return( 
                                <li key={item.id} className="side--nav">
                                    <Link to={item.path} id='link1'>{item.title}</Link>
                                </li>
                            )
                        })}
                </ul>
        </>
    )
}

export default SideBar