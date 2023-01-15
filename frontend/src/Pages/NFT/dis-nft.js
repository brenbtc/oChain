import './dis-nft.css'

function NFT() {

    const [nfts, setNfts] = useState([]);

    return (
        <div>
        <h1>DISCOVER NFTs</h1>
        {/* <div>
        {nfts.map(nft => (
            <div key={nft.id}>
                <img src={nft.image_url} alt={nft.name} />
                <h6>{nft.collection}</h6>
                <h6>{nft.nftid}</h6>
                <h6>{nft.price} ETH</h6>
                <h6>{nft.floor} ETH</h6>
            </div>
        ))} */}
    {/* </div> */}
        </div>
    )
}

export default NFT