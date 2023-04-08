import './Thumb.css'

function Thumb({ title, imageUrl }) {
    return (
        <article style={{ backgroundImage: `url(${imageUrl})` }} className="card" >
            <span className="card-title">{title}</span>
        </article >
    )
}

export default Thumb;