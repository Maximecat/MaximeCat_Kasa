import './Banner.css'

function Banner({ title, backgroundUrl }) {

    return (
        <section className='banner'>
            <h1 className='title-banner'>{title}Chez vous, partout et ailleurs</h1>
            <img className='img-background-banner' src="/background-banner.png" alt="background-banner"></img>
        </section>
    )
}

export default Banner