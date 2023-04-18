import './Housing.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Tag from '../../components/Tag/Tag';
import Dropdown from '../../components/Dropdown/Dropdown';
import Banner from '../../components/Banner/Banner';
// import RedStar from '../../components/Rating/RedStar';
// import GreyStar from '../../components/Rating/GreyStar';
// import Slider from '../../components/Slider/Slider'

function Housing() {
    const [logement, setLogement] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getDatas()
    }, [])

    async function getDatas() {
        let url = "http://localhost:3000/logements.json"
        const response = await fetch(url)
        const datas = await response.json()
        const foundLogement = datas.find((l) => id === l.id)
        if (foundLogement) {
            setLogement(foundLogement)
        } else {
            navigate("/logement-non-trouve")
        }
    }

    return (
        <>
            {
                logement && <main>
                    <Banner title={"CARROUSEL"}></Banner>
                    {/* <Slider></Slider> */}
                    <div className='logement-page'>
                        <div className='logement-content'>
                            <div className='logement-informations-and-tags'>
                                <h1 className='logement-title'>{logement.title}</h1>
                                <h2 className='logement-location'>{logement.location}</h2>
                                <div className='logement-tags'>
                                    {
                                        logement.tags.map((tag) =>
                                            <Tag tagName={tag}></Tag>
                                        )
                                    }
                                </div>
                            </div>
                            <div className='logement-owner-and-rating'>
                                <div className='logement-owner'>
                                    <h3 className='owner-name'>{logement.host.name}</h3>
                                    <img className='owner-photo' src={logement.host.picture} alt="owner-profil" />
                                </div>
                                <div className='logement-rating'>
                                    {
                                        // console.log(Number(logement.rating))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className='logement-page-dropdowns'>
                            <div>
                                <Dropdown title={"Description"} content={logement.description}></Dropdown>
                            </div>
                            <div>
                                <Dropdown title={"Équipements"} content={logement.equipments}></Dropdown>
                            </div>
                        </div>
                    </div>
                </main>
            }
        </>
    )
}

export default Housing 