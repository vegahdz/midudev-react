// Creando una APP usando create-react-app

import './App.css';
import {useEffect, useState} from 'react';

const GIFS = [
  'https://media3.giphy.com/media/pO1H8mAU7geAw/giphy.gif?cid=ecf05e47xmol8pau9coz9uulqf65515axxfqzkyhcy15licg&rid=giphy.gif&ct=g',
  'https://media1.giphy.com/media/EPcvhM28ER9XW/giphy.gif?cid=ecf05e47b7hd1jgns5yif6s6orirkf2voa2qx1jtwhogvr1r&rid=giphy.gif&ct=g'
]

const DIFERENT_GIFS = [
  'https://media1.giphy.com/media/5hrj42zCA1RoA/giphy.gif?cid=ecf05e47w74f82ttmwbyeqx3bkbzmq9ewdh3cu3sg11hpd16&rid=giphy.gif&ct=g'

]
function App() {
  const [gifs, setGifs] = useState(GIFS)

  useEffect( () => {
    console.log ('Efecto ejecutado');
  })

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} alt='panda' />)
        }
        <button onClick={() => setGifs(DIFERENT_GIFS)}>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
