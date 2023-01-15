import { useState } from 'react'

import './home.css'

function Home() {

    const items = [
        {
            id: 1,
            image: '../../public/astoock.jpeg',
            title: 'Crypto',
            description: 'The ultimate cryptocurrency directory. Keep an eye on your crypto. Plan your next trade.',
            route: '/Crypto'
        },
        {
            id: 2,
            image: '../../public/ape.jpeg',
            title: 'NFTs',
            description: 'The ultimate NFT directory. Track your favorite NFTs.',
            route: '/NFT'
        },
        {
            id: 3,
            image: '../../public/aboot.jpeg',
            title: 'About',
            description: 'Come learn more about the company.',
            route: '/About'
        }
    ];
    

    const [index, setIndex] = useState(0);

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