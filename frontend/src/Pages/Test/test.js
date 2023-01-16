import { useEffect,useState } from "react"
import axios from "axios"

function Test() {

    const [crypto, setCrypto] =useState([]);

    useEffect(()=> {
        axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/tickers?page=100')
        .then(res => {
            setCrypto(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    return (
        <div >
            <h1>MY Test</h1>
            <div>

            </div>
        </div>
        
    )
}

export default Test