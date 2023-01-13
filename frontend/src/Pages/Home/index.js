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
            <h1>DISCOVER THE PERFECT WATCHLIST</h1>
            <h2>PLAN YOUR TRADE.</h2>
            <h2>TRADE YOUR PLAN.</h2>

        </div>
    )
}

export default Home