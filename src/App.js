import logo from './logo.svg';
import './App.css';
import './styles.css'; // Importing the styles.css file
import Header from './components/Header';
import Footer from './components/Footer';
import Moviesgrid from './components/Moviesgrid';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Moviesgrid></Moviesgrid>
      </div>
    
    <Footer></Footer>
    </div>
  );
}

export default App;
