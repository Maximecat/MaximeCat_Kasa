import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
// import Tag from '../../components/Tag/Tag';
// import Dropdown from '../../components/Dropdown/Dropdown';
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
        <Banner title={"Chez vous, partout et ailleurs"} />
        <section className='card-grid'>
          {
            logements.map((logement) =>
              <Link to={`/housing/${logement.id}`}>
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
