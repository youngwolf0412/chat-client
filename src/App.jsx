import React,{Suspense, lazy} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './components/auth/ProtectedRoute';
import LayoutLoader from './components/layout/Loaders';
// import NotFound from './pages/NotFound';

// import Home from './pages/Home';
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user=true;

const App = () => {
  return (
    <Router>
      <Suspense fallback={<LayoutLoader/>}>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}
        >
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />}/>
          <Route path='/groups' element={<Groups />}/>
        </Route>
      
        <Route path='/login' element={<ProtectedRoute user={!user} redirect='/'>
          <Login />
        </ProtectedRoute>} />

        <Route path='*' element={<NotFound/>} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App