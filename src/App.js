import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home'
import About from './page/About';
import PokemonCard from './components/pokemon-detail/PokemonCard';
import Type from './page/Type';

function App() {
  return (    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/pokemon/:pokemon" element={<PokemonCard />}/>
        <Route path="/favoris" element={<Home />}/>
        <Route path="/type/:type" element={<Type />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
