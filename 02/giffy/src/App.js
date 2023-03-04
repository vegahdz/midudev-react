// Creando una APP usando create-react-app
import React from "react";
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Learn React</h1>
        <Link to="/gif/panda">Gifs de Pandas</Link>
        <Link to="/gif/ecuador">Gifs de Ecuador</Link>
        <Link to="/gif/chile">Gifs de Chile</Link>

        <Route
          component={ListOfGifs}
          path="/gif/:keyword"
        >
        </Route>
      </section>
    </div>
  );
}

export default App;
