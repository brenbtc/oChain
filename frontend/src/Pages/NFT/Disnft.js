import { CenterProvider } from "@center-inc/react";
import { useState,useEffect } from "react";
import "./dis-nft.css";
import axios from "axios";

function Disnft() {
  const [searchQuery, setSearchQuery] = useState("");
  const API = "https://api.center.dev/v1/ethereum-mainnet/search";
  const [data, setData] = useState([]);
  useEffect(() => {
    //send axios request with X-API-KEY header
    axios.get(API, {
        headers: { "X-API-KEY": "key4167cd9ebe80e380cb42fdba" },
        accept: "application/json",
        params: {query: searchQuery,},
      })
      .then((res) => {
        setData(res.data.results);
      });
  }, [searchQuery]);  

  return (
    <CenterProvider apiKey="key4167cd9ebe80e380cb42fdba">
      <main className="nft-page">
        <header>
          <h4>
            <strong>DISCOVER NFTs</strong>
          </h4>
        </header>
        <div>
          <form>
            <input
              className="browser-default"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
          </form>
        </div>
        <div>
          <ul
          className="unlist"
            >
            {data?.map((item) => (
              <li key={item.id}>
                {/* create a NFT card to display image name and Address */}
                <div
                  className="nft-card"
                >
                  {item.previewImageUrl ? (
                    <img
                    className="nft-img"
                      src={item.previewImageUrl}
                      alt={item.name}
                    />
                  ) : (
                    <img
                    className="nft-img"
                      src="https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg"
                      alt={item.name}
                    />
                  )}
                  <h5>{item.name}</h5>
                  <h6>Address:</h6>
                  <p
                  className="nft-address"
                  >
                    {item.address}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </CenterProvider>
  );
}

export default Disnft;
