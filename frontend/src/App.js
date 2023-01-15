import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

// Components \\
import Nav from './components/Nav/nav';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';


// Pages \\
import Home from "./Pages/Home";


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser]= useState([])

  useEffect(() => {
    if (localStorage.token) {
      setLoggedIn(true)
    }
  }, [])

  return (
    <>
    <header>
      <Nav loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </header>
      <main>
        <Routes>
          <Route 
          path='/' 
          element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>}
          />

          <Route
           path="/login" 
           element={ <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} 
           />

          <Route 
          path="/signup"
          element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}/>}
          />

          <Route 

          />
        </Routes>
      </main>
    </>
  );
}

export default App;
