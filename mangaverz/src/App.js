import MangaAdminPage from './components/pages/MangaAdminPage';
import {
  Routes,
  Route
} from 'react-router-dom'
import CollectionPage from './components/pages/CollectionPage';
import MangaPage from './components/pages/MangaPage'
import StartPage from './components/pages/StartPage';
import RequireAuth from './authentication/RequireAuth';
import AuthLanding from './authentication/AuthLanding';
import Error from './components/Error';
import MangaDetails from './components/manga/MangaDetails';
import MangaEdit from './components/manga/MangaEdit';
import CollectionEdit from './components/mangacollection/CollectionEdit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/manga' element={<RequireAuth><MangaPage/></RequireAuth>}/>
      <Route path='/admin-manga' element={<RequireAuth><MangaAdminPage/></RequireAuth>}/>
      <Route path='/collection' element={<RequireAuth><CollectionPage/></RequireAuth>}/>
      <Route path='/manga/:id' element={<RequireAuth><MangaDetails/></RequireAuth>}/>
      <Route path='/collection/edit/:id' element={<RequireAuth><CollectionEdit/></RequireAuth>}/>
      <Route path='/manga/edit/:id' element={<RequireAuth><MangaEdit/></RequireAuth>}/>
      <Route path='/login' element={<AuthLanding/>}/>
    </Routes>
    
  );
}

export default App;