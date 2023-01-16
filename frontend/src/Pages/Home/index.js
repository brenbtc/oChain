import { useState } from 'react'


import './home.css'

function Home() {

    
    const cards = [
        { id: 1, img: 'https://i.imgur.com/PkqIl6w.png', title: 'Crypto', content: 'The ultimate cryptocurrency directory. Trade away!',link: '/crypto' },
        { id: 2, img: 'https://i.imgur.com/xxC67Nu.jpg', title: 'NFTs', content: 'The ultimate NFT directory. Track your favorite NFTs!' ,link: '/nft'},
        { id: 3, img: 'https://i.imgur.com/OYv8zLk.png', title: 'Learn', content: 'Learn everything blockchain related. Come learn more!',link: '/about' },
      ];
 
    return (
        <main className="home-page">
            <header className='homeTitle'>
                <h4><strong>PLAN YOUR TRADE.</strong></h4>
                <h4><strong>TRADE YOUR PLAN.</strong></h4>
                <h4><strong>DISCOVER THE PERFECT WATCHLIST.</strong></h4>
            </header>
            <div className="row">
            {cards.map((card) => (
                <div key={card.id} className="col">
                    <a href={card.link}>
                    <div className="card small">
                        <div className="card-image">
                            <img src={card.img} />
                        </div>
                        <span className='homeTitle'><h5><strong>{card.title}</strong></h5></span>
                        <div className="card-content">
                            <p>{card.content}</p>
                        </div>
                    </div>
                    </a>
                </div>
            ))}
            </div>
      </main>
    )
}
export default Home
