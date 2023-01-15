import { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';



import './home.css'

function Home() {

    const cards = [1, 2, 3];


    return (
        <div>

            <button>
            <a role='button' href='/signup'>Get Started</a>
            </button>

            <h2>DISCOVER THE PERFECT WATCHLIST</h2>
            <h2>PLAN YOUR TRADE.</h2>
            <h2>TRADE YOUR PLAN.</h2>

            <ul>
                <li>
                    <a href='/crypto'>Crypto</a>
                </li>

                <li>
                    <a href='/nfts'>NFTs</a>
                </li>

                <li>
                    <a href='/about'>About</a>
                </li>
            </ul>
    
        </div>
    )
}




export default Home