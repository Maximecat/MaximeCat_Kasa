import { useState } from 'react';
import './Slider.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Slider({ pictures }) {
    const [pictureIndex, setPictureIndex] = useState(0)

    return (
        <section className='carrousel-block'>
            <img className='img-carrousel' src={pictures[pictureIndex]} alt=''></img>
            <FontAwesomeIcon onClick={() => setPictureIndex(pictureIndex - 1)} className='icon-arrow-left' icon={faAngleLeft} ></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => setPictureIndex(pictureIndex + 1)} className='icon-arrow-right' icon={faAngleRight} ></FontAwesomeIcon>
        </section>
    )
}

export default Slider
