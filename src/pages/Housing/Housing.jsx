import './Housing.css';
import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Slider from '../../components/Slider/Slider';
import Tag from '../../components/Tag/Tag';
import Host from '../../components/Host/Host';
import Rating from '../../components/Rating/Rating';
import Dropdown from '../../components/Dropdown/Dropdown';

function Housing() {
    const [logement, setLogement] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()

    const getDatas = useCallback(async () => {
        let url = "http://localhost:3000/logements.json"
        const response = await fetch(url)
        const datas = await response.json()
        const foundLogement = datas.find((l) => id === l.id)
        if (foundLogement) {
            setLogement(foundLogement)
        } else {
            navigate("/logement-non-trouve")
        }
    }, [id, navigate])

    useEffect(() => {
        getDatas()
    }, [getDatas])

    return (
        <>
            {
                logement && <main>
                    <Slider pictures={logement.pictures} />
                    <div className='logement-page'>
                        <div className='logement-content'>
                            <div className='logement-informations-and-tags'>
                                <h1 className='logement-title'>{logement.title}</h1>
                                <h2 className='logement-location'>{logement.location}</h2>
                                <div className='logement-tags'>
                                    {
                                        logement.tags.map((tag) =>
                                            <Tag key={"tag-" + tag} tagName={tag} />
                                        )
                                    }
                                </div>
                            </div>
                            <div className='logement-owner-and-rating'>
                                <Host name={logement.host.name} picture={logement.host.picture} />
                                <div className='logement-rating'>
                                    <Rating rating={logement.rating} max={5} />
                                </div>
                            </div>
                        </div>
                        <div className='logement-page-dropdowns'>
                            <div>
                                <Dropdown title={"Description"} content={logement.description} />
                            </div>
                            <div>
                                <Dropdown title={"Équipements"} content={logement.equipments} />
                            </div>
                        </div>
                    </div>
                </main>
            }
        </>
    )
}

export default Housing 