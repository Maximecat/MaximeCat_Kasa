import { useState } from "react";
import './Dropdown.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="dropdown" onClick={() => setIsOpen(isOpen ? false : true)}>
                {title}
                {
                    isOpen ? <FontAwesomeIcon className="icon-arrow-up" icon={faAngleUp} />
                        :
                        <FontAwesomeIcon className="icon-arrow-down" icon={faAngleDown} />
                }
            </div>
            {
                isOpen &&
                <div className="dropdown-content">
                    {
                        Array.isArray(content) ?
                            <ul className="dropdown-list">
                                {
                                    content.map((contentValue) => <li className="dropdown-list-elements">{contentValue}</li>)
                                }
                            </ul>
                            :
                            <p>{content}</p>
                    }
                </div>
            }
        </>
    )
}

export default Dropdown;