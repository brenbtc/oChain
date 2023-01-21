import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

// Components \\
import Nav from './components/Nav/nav';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Footer from './components/Footer';
import { CenterProvider } from '@center-inc/react'




// Pages \\
import Home from "./Pages/Home";
import About from './Pages/About/about';
import Crypto from './Pages/Crypto/dis-crypto'

import Disnft from './Pages/NFT/Disnft';
import ShowCrypto from './Pages/ShowCrypto/show-crypto'
import Learn from './Pages/Learn';
import Watchlist from './Pages/Watchlist/watchlist'
import MakeNote from './Pages/MakeNote';
import Notes from './Pages/Notes';

function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser]= useState({})

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
           element={ <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}/>} 
           />

          <Route 
          path="/signup"
          element={<Signup loggedIn={loggedIn} setLoggedIn={setLoggedIn} setUser={setUser}/>}
          />

          <Route 
          path='/about'
          element={<About />}
          />

          <Route 
          path='/crypto'
          element={<Crypto />}
          />

          <Route 
          path="/nft" 
          element={<Disnft />} 
          />


          <Route 
          path='/crypto/crypto'
          element={<ShowCrypto />}
          />

          <Route 
          path='/watchlist'
          element={<Watchlist loggedIn={loggedIn}/>}
          />
          
          <Route 
          path='/make'
          element={<MakeNote />}
          />
          

          <Route 
          path='/learn'
          element={<Learn />}
          />


          <Route 
          path='/notes'
          element={<Notes  loggedIn={loggedIn} user={user}/>}
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
