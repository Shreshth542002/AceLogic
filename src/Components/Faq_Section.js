import React, {useState} from 'react'
import '../Styles/Faq_Section.css'

function Faq_Section(props) {

    const [isOpen,setIsOpen] = useState(false);

    return (
        <>
            <div className={isOpen ? "collapsible--group selected" : "collapsible--group"}  onClick={() => setIsOpen(!isOpen)}>
                <div className={isOpen ? "content displayed" : "content"}>
                    {props.label}
                    <i class="fa-solid fa-angle-down"></i>
                </div>
                {isOpen && <p>{props.children}</p>}
            </div>
        </>
  )
}

export default Faq_Section