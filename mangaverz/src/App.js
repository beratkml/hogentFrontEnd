import MangaList from './components/manga/MangaList';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MangaList/>
      <Footer/>
    </div>
  );
}

export default App;
