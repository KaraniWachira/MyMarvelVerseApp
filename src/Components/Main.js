import React, { useEffect, useState } from "react";
import "./styles.css";
import Card from "./Card";
import axios from "axios";


const Main = () => {
    const [url, setUrl] = useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f74b340ba2e62d7b219fb01ed247a07e&hash=fcca4a10778f93eeb15ea2e29d5e2c95");
    const [item, setItem] = useState();
    const [search, setSearch] = useState("");


    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get(url);
            setItem(res.data.data.results);
        };
        fetch();
    }, [url]);

    const searchMarvel =()=> {
        setUrl(`https://gateway.marvel.com/v1/public/characters/?nameStartsWith=${search}&ts=1&apikey=f74b340ba2e62d7b219fb01ed247a07e&hash=fcca4a10778f93eeb15ea2e29d5e2c95`);
    }

    return (
        <>
            <div className="header-main">
                <div className="header-logo">
                <img src="./images/mavslogo.png" alt="logo" />
                </div>
                <div className="background">
                    <img src="./images/marvel-universe.jpg" alt="backgroundImage" />
                </div>
                <div className="search-bar">
                    <input
                        type="search"
                        placeholder="search the MarvelVerse"
                        className="search"
                        onChange={e => setSearch(e.target.value)}
                        onKeyDown={searchMarvel} 
                    />
                </div>
            </div>
            <div className="content">
                {
                    (!item)?<p> 🥺...chill nafetch...🥺 </p>:<Card data={item} />
                }
            </div>

            <div className="footer">
            <img src="./images/mavslogo.png" alt="logo" />
            </div>
        </>
    );
};

export default Main;
