import './index.css'

function Learn() {

    const cards = [
        { id: 1, img: 'https://blog.liquid.com/hubfs/DAO-%20Network.png', title: 'DAOs', content: 'A beginners guide to DAOs.',link: 'https://linda.mirror.xyz/Vh8K4leCGEO06_qSGx-vS5lvgUqhqkCz9ut81WwCP2o' },
        { id: 2, img: 'https://www.investopedia.com/thmb/_yrUcpKNMePYA-jQISLfRa0POS4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1367699775-53776eb586334d4098127fdc1550988f.jpg', title: 'NFTs', content: 'What are NFTs?' ,link: 'https://opensea.io/blog/guides/non-fungible-tokens/'},
        { id: 3, img: 'https://img.money.com/2022/06/What-Is-Blockchain-Infographic.jpg', title: 'Blockchain', content: 'What is it? How it works, and how it can be used.',link: 'https://www.investopedia.com/terms/b/blockchain.asp' },
        { id: 4, img: 'https://www.howtogeek.com/wp-content/uploads/2022/01/shutterstock_2034415673.jpg?height=200p&trim=2,2,2,2', title: 'DeFi', content: 'What is Decentralized Finance (DeFi)?',link: 'https://www.investopedia.com/decentralized-finance-defi-5113835#:~:text=Decentralized%20finance%20eliminates%20intermediaries%20by,%2C%20software%2C%20and%20hardware%20advancements.' },
        { id: 5, img: 'https://www.ledger.com/wp-content/uploads/2019/06/assets_logo_metamask.jpg', title: 'MetaMask', content: 'Learn to use MetaMask' ,link: 'https://levelup.gitconnected.com/how-to-use-metamask-a-step-by-step-guide-f380a3943fb1'},
        { id: 6, img: 'https://trutrade.io/wp-content/uploads/2022/02/NinjaTrader-Automated-Trading-Strategy.jpeg', title: 'How to Trade Stocks & Crypto', content: "Want to trade but don't know where to start?",link: 'https://www.investopedia.com/learn-how-to-trade-the-market-in-5-steps-4692230' },
        { id: 7, img: 'https://assets.weforum.org/article/image/0R7BdnZl_gyeWOKsudAVmI7gNR673V4BIxQM6gwT-FY.png', title: 'Web 3', content: 'Web 3 Explained',link: 'https://www.investopedia.com/web-20-web-30-5208698' },
        { id: 8, img: 'https://www.insurancejournal.com/app/uploads/2022/11/Metaverse-bigstock-scaled.jpg', title: 'Metaverse', content: 'What Does Metaverse Mean and How Does This Virtual World Work?',link: 'https://www.investopedia.com/metaverse-definition-5206578' },
        { id: 9, img: 'https://misti.mit.edu/sites/default/files/styles/hero_home_desktop/public/2022-03/human-like-robot-and-artificial-intelligence-2022-01-06-00-25-53-utc.jpg?h=67494091&itok=C7js1A7t', title: 'Artificial Intelligence', content: 'What It Is and How It Is Used',link: 'https://www.investopedia.com/terms/a/artificial-intelligence-ai.asp' },
        { id: 10, img: 'https://assets.weforum.org/article/image/responsive_big_webp_Ro-4fe92SpyFhm1A-tYFtWl_Bcsw8MDmEzjJVmlIF4M.webp', title: 'Cryptocurrency', content: 'What is it? How does it work? How to purchase?',link: 'https://cointelegraph.com/blockchain-for-beginners/what-is-a-cryptocurrency-a-beginners-guide-to-digital-money' },

      ];

    return (
        <main className='learn-page'>
            <header className='header'>
                <h2><strong>Learn</strong></h2>
                <h6>LEARN AND NAVIGATE THROUGH THE RAPIDLY EVOLVING FUTURE</h6>
            </header>
            <div className="cardslist">
            {cards.map((card) => (
                <div key={card.id} className="col">
                    <a href={card.link} target='_blank'>
                    <div className="card large">
                        <div className="card-image">
                            <img src={card.img} />
                        </div>
                        <span className='homeTitle'><h5><strong>{card.title}</strong></h5></span>
                        <div className="card-content">
                            <p><h6 className='content'>{card.content}</h6></p>
                        </div>
                    </div>
                    </a>
                </div>
            ))}
            </div>
        </main>
    )
}

export default Learn