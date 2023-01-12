import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './dis-crypto.css'

function Crypto() {

    const [cryptoData, setCryptoData] = useState([]);

    useEffect(() => {
        axios.get('filler')
          .then(res => setCryptoData(res.data))
      }, []);

    return (
        <div>
        <h1>Discover Crypto</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            {cryptoData.map(coin => (
                <tr key={coin.id}>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>{coin.price_usd}</td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Crypto