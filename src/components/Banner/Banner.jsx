import './Banner.css'

function Banner({ title, backgroundUrl }) {

    return (
        <section className='banner'>
            <h1 className='title-banner'>{title}</h1>
            <img className='img-background-banner' src={backgroundUrl} alt="background-banner"></img>
        </section>
    )
}

export default Banner