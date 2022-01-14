import { useEffect, useState } from 'react';
import './descriptionsStyle.css';
import Navbar from '../navbar/Navbar';

function Descriptions() {
    const [gamelist, setgamelist] = useState([]);

    const getAllGames = () => {
        return fetch("http://localhost:8080/api/games")
        .then((response) => response.json())
        .then((data) => setgamelist(data));
    }

    useEffect(() => {
        getAllGames();
    },[]);




    return (
        <div className='descriptions'>
            <Navbar />
            {gamelist.map((games) => (<div key={games.gameId}><h2 className='description-header'>{games.name}</h2> 
            <p className='game-description'>{games.description}</p></div> ))}    

{/* 
            <h2 className='description-header'>Bay Window</h2>
            <p className='game-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <h2 className='description-header'>Flashlight</h2>
            <p className='game-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <h2 className='description-header'>Drag Counter</h2>
            <p className='game-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <h2 className='description-header'>Bookshelf</h2>
            <p className='game-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
            <h2 className='description-header'>Picture Tear</h2>
            <p className='game-description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p> */}

        </div>
    )
}

export default Descriptions;