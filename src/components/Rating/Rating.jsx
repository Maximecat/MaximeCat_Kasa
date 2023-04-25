import './Rating.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rating({ rating, max }) {
    const maxArray = Array(max).fill(0)

    return (
        <>
            {
                maxArray.map((value, index) =>
                    <FontAwesomeIcon key={"rating-" + index} className={index + 1 <= rating ? "icon-red-star" : "icon-grey-star"} icon={faStar} />)
            }
        </>
    )
}

export default Rating