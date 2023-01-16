import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './dis-crypto.css'

function Crypto() {

    const[crypto, setCrypto] = useState([]);

    useEffect(()=> {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCrypto(res.data)
            console.log(res.data)
        }).catch(err => {
            console.log(err)
        })
    },[])

    
    return (
        <div className='crypto-page'>
            <div className='header'>
                <h4><strong>DISCOVER CRYPTO</strong></h4>
            </div>
            <div>
                <table className='centered striped responsive-table'>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>Volume</th>
                            <th>24h</th>

                        </tr>
                    </thead>
                        <tbody>
                            {crypto.map((props) => {
                                return (
                                    <tr key={props.id}>
                                        <td>{props.market_cap_rank.toLocaleString()}</td>
                                        <td> <img src={props.image} className='coinImage'/> {props.name}</td>
                                        <td>{props.symbol.toUpperCase()}</td>
                                        <td>${props.current_price.toLocaleString()}</td>
                                        <td>${props.total_volume.toLocaleString()}</td>
                                        <td className={props.price_change_24h < 0 ? 'Red' : 'Green'}>${props.price_change_24h.toLocaleString()}</td>
                                    </tr>
                                    
                                )
                            })}
                        </tbody>
                </table>
            </div>

        </div>
    )
}

export default Crypto
