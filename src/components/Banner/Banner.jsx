import './Banner.css'

function Banner({ title, backgroundUrl }) {

    return (
        <section className='banner'>
            <h1 className='title-banner'>{title}</h1>
            <img className='img-background-banner' src={backgroundUrl = "background-banner.png"} alt="background-banner"></img>
        </section>
    )
}

export default Banner