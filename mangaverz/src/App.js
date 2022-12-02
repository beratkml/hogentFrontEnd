import MangaAdminPage from './components/pages/MangaAdminPage';
import { Routes, Route } from 'react-router-dom'
import CollectionPage from './components/pages/CollectionPage';
import MangaPage from './components/pages/MangaPage'
import StartPage from './components/pages/StartPage';
import RequireAuth from './authentication/RequireAuth';
import AuthLanding from './authentication/AuthLanding';
import MangaList from './components/manga/MangaList';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/manga' element={<MangaPage/>}/>
      <Route path='/admin-manga' element={<RequireAuth><MangaAdminPage/></RequireAuth>}/>
      <Route path='/login' element={<AuthLanding/>}/>
    </Routes>
    
  );
}

export default App;
