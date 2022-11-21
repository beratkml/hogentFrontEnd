import MangaPage from './components/pages/MangaPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<MangaPage/>}/>
    </Routes>
    
  );
}

export default App;
