import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import SetDetail from './pages/SetDetail'
import CreateSet from './pages/CreateSet'
import ModeFlashcard from './pages/modes/ModeFlashcard'

function App() {
  const { user } = useAuthContext()

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path = "/"
              element = {user ? <Home />  : <Navigate to="/login"/>}
            />
            <Route 
              path = "/login"
              element = {!user ? <Login /> : <Navigate to="/"/>}
            />
            <Route 
              path = "/signup"
              element = {!user ? <Signup /> : <Navigate to="/"/>}
            />
            <Route 
              path = '/sets/:id/flashcard'
              element = {user ? <ModeFlashcard />  : <ModeFlashcard />}
            />
            <Route 
              path = '/sets/:id'
              element = {user ? <SetDetail />  : <SetDetail />}
            />
            <Route 
              path = '/create'
              element = {user ? <CreateSet />  : <Navigate to="/login"/>}
            />
            
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
