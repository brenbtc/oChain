import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

// Components \\
import Nav from './components/Nav/nav';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Footer from './components/Footer';



// Pages \\
import Home from "./Pages/Home";
import About from './Pages/About/about';
import Crypto from './Pages/Crypto/dis-crypto'
import NFT from './Pages/NFT/dis-nft'
import ShowCrypto from './Pages/ShowCrypto/show-crypto'
import Watchlist from './Pages/Watchlist/watchlist'
import Test from './Pages/Test/test';

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
          path='/about'
          element={<About />}
          />

          <Route 
          path='/crypto'
          element={<Crypto />}
          />

          <Route 
          path='/nft'
          element={<NFT />}
          />

          <Route 
          path='/crypto/crypto'
          element={<ShowCrypto />}
          />

          <Route 
          path='/watchlist'
          element={<Watchlist />}
          />
          

          <Route 
          path='/test'
          element={<Test />}
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
