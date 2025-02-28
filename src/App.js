import logo from './logo.svg';
import './App.css';
import './styles.css'; // Importing the styles.css file
import Header from './components/Header';
import Footer from './components/Footer';
import Moviesgrid from './components/Moviesgrid';
import Watchlist from './components/Watchlist';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => setmovies(data));
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/watchlist">Watchlist</Link></li>
            </ul> 
          </nav>

          <Routes>
            <Route path="/" element={<Moviesgrid movies={movies} />} />
            <Route path="/watchlist" element={<Watchlist />} />
          </Routes>
        </Router>
      </div>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
