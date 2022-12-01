import MangaPage from './components/pages/MangaPage';
import { Routes, Route } from 'react-router-dom'
import CollectionPage from './components/pages/CollectionPage';
import StartPage from './components/pages/StartPage';
import RequireAuth from './authentication/RequireAuth';
import AuthLanding from './authentication/AuthLanding';

function App() {
  return (
    <Routes>
      <Route path='/' element={<StartPage/>}/>
      <Route path='/collection' element={<CollectionPage/>}/>
      <Route path='/manga' element={<RequireAuth><MangaPage/></RequireAuth>}/>
      <Route path='/login' element={<AuthLanding/>}/>
    </Routes>
    
  );
}

export default App;
