// Creando una APP usando create-react-app

import './App.css';
import {useEffect, useState} from 'react';
import getGifs from './services/getGifs';
import Gif from './components/Gif';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect( () => {
    // console.log ('Efecto ejecutado');
    getGifs({keyword: 'programming'}).then(gifs => setGifs(gifs));
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif =>
            <Gif
              key={singleGif.id}
              title={singleGif.title}
              id={singleGif.id}
              url={singleGif.url}
            />
         )
        }
        {/* <button onClick={() => setGifs(DIFERENT_GIFS)}>Cambiar gifs</button> */}
      </section>
    </div>
  );
}

export default App;
