import MangaPage from './components/pages/MangaPage';
import { Routes, Route } from 'react-router-dom'
import CollectionPage from './components/pages/CollectionPage';
import StartPage from './components/pages/StartPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/collection' element={<CollectionPage/>}/>
      <Route path='/manga' element={<MangaPage/>}/>
    </Routes>
    
  );
}

export default App;
