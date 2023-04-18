import './Host.css'



function Host({ name, picture }) {
    const splitName = name.split(" ")

    return (
        <div className='logement-owner'>
            <h3 className='owner-name'>
                {
                    splitName[0]
                }
                <br />
                {
                    splitName[1]
                }
            </h3>
            <img className='owner-photo' src={picture} alt="owner-profil" />
        </div>
    )
}

export default Host