import { useState } from "react";
import './Dropdown.css'

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="dropdown" onClick={() => setIsOpen(isOpen ? false : true)}>{title}</div>
            <div>
                {
                    Array.isArray(content) ?
                        <ul className="dropdown-content">
                            {
                                content.map((contentValue) => <li className="dropdown-list-elements">{contentValue}</li>)
                            }
                        </ul>
                        :
                        <p className="dropdown-content">{content}</p>
                }
            </div>
        </>
    )
}

export default Dropdown;