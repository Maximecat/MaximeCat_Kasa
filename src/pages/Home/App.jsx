import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Banner from '../../components/Banner/Banner';
import Thumb from '../../components/Thumb/Thumb';
import { Link } from "react-router-dom";

function App() {

  const [logements, setLogements] = useState([])

  useEffect(() => {
    getDatas()
  }, [])

  async function getDatas() {
    let url = "http://localhost:3000/logements.json"
    const response = await fetch(url)
    const datas = await response.json()
    setLogements(datas)
  }

  return (
    < div className="App" >

      <main>
        <Banner title={"Chez vous, partout et ailleurs"} backgroundUrl={"background-banner.png"} />
        <section className='card-grid'>
          {
            logements.map((logement) =>
              <Link key={"logement-" + logement.id} to={`/housing/${logement.id}`} className='links-housing'>
                <Thumb imageUrl={logement.cover} title={logement.title}></Thumb>
              </Link>
            )
          }
        </section>
      </main>
    </div >
  );
}

export default App;
