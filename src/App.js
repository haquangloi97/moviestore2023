import { useState, useEffect, createContext } from 'react';
import Header from './containers/Header';
import Home from './views/Home';
import { Routes, Route } from "react-router-dom";


const API_URL = 'http://www.omdbapi.com?apikey=128f1226';
export const ValuesContext = createContext();

const App = () => {
  const [movies, setMovies] = useState('');
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('Harry Potter')
  }, [])

  return (
    <ValuesContext.Provider value={{ searchTerm, setSearchTerm, searchMovies, movies }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ValuesContext.Provider>
  );
}

export default App;