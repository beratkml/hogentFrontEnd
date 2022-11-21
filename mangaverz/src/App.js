import MangaPage from './components/pages/MangaPage';
import { Routes, Route } from 'react-router-dom'
import CollectionPage from './components/pages/CollectionPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<CollectionPage/>}/>
      <Route path='/collection' element={<MangaPage/>}/>
    </Routes>
    
  );
}

export default App;
