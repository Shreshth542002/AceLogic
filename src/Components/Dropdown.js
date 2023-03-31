import React,{useState} from "react";
import { Link } from "react-router-dom";
import { coursesDropDown } from "../Navitems";
import '../Styles/Dropdown.css';

function Dropdown() {

  const [dropdown,setdropdown] = useState(false);

  return (
    <>
      <ul className={dropdown ? "courses--submenu clicked": "courses--submenu"} onClick={() => setdropdown(!dropdown)}>
        {coursesDropDown.map(item => {
          return(
            <li key={item.id}>
              <Link to={item.path} className={item.cName} id='link2' onClick={() => setdropdown(false)}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  )
}

export default Dropdown