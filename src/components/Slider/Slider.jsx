import { useState } from 'react';
import './Slider.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

function Slider({ pictures }) {
    const [pictureIndex, setPictureIndex] = useState(0)
    const changePicture = (direction) => {
        switch (direction) {
            case 'left':
                if (pictureIndex > 0) {
                    setPictureIndex(pictureIndex - 1)
                } else {
                    setPictureIndex(pictures.length - 1)
                }
                break;

            case 'right':
                if (pictureIndex < pictures.length - 1) {
                    setPictureIndex(pictureIndex + 1)
                } else {
                    setPictureIndex(0)
                }
                break;

            default:
                break;
        }
    }

    return (
        <section className='carrousel-block'>
            <img className='img-carrousel' src={pictures[pictureIndex]} alt=''></img>
            <span className='pictures-count'>{pictureIndex + 1}/{pictures.length}</span>
            <FontAwesomeIcon onClick={() => changePicture('left')} className='icon-arrow-left' icon={faAngleLeft} ></FontAwesomeIcon>
            <FontAwesomeIcon onClick={() => changePicture('right')} className='icon-arrow-right' icon={faAngleRight} ></FontAwesomeIcon>
        </section>
    )
}

export default Slider
