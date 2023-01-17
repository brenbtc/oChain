import { useCollectionSearch,SearchResultType } from '@center-inc/react'
import { SearchResults } from '@center-inc/react'
import { CenterProvider } from '@center-inc/react'
import { Asset } from '@center-inc/react'
import { useState } from 'react'
import './dis-nft.css'

function NFT() {

    const [searchQuery, setSearchQuery] = useState('')
    const { results } = useCollectionSearch({ searchQuery })




    return (
        <CenterProvider>

        <main className='nft-page'>
            <header>
                <h4><strong>DISCOVER NFTs</strong></h4>
            </header>
            <div>
                <form>
                    <input
                    className='browser-default'
                    type='search'
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    />                
                </form>
            </div>
            <div>
                <ul>
                    {results.map(results => {
                    <li>{results.name}</li>
                    })}
                </ul>
            </div>
        </main>
        </CenterProvider>

    )
}





export default NFT