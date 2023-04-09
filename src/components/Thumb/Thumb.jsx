import './Thumb.css'

function Thumb({ title, imageUrl }) {
    return (
        <article style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,1) 100%), url(${imageUrl})` }} className="card" >
            <span className="card-title">{title}</span>
        </article >
    )
}

export default Thumb;