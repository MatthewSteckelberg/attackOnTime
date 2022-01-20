import { useEffect, useState } from 'react';
import './descriptionsStyle.css';
import Navbar from '../navbar/Navbar';
import game1 from './images/game-1.png';
import game2 from './images/game-2.png';
import game3 from './images/game-3.png';
import game4 from './images/game-4.png';
import game5 from './images/game-5.png';




function Descriptions(userObject) {
    const [gamelist, setgamelist] = useState([]);

    const getAllGames = () => {
        return fetch("http://localhost:8080/api/games")
            .then((response) => response.json())
            .then((data) => setgamelist(data));
    }

    useEffect(() => {
        getAllGames();
    }, []);

let images = ['', game1, game2, game3, game4, game5]


    return (
        <div className='descriptions'>
            <Navbar userObject={userObject} />
            {gamelist.map((games) => (
                <div key={games.gameId}>
                    <h2 className='description-header'>{games.name}</h2>
                    <div className='row'>
                        <img src={images[games.gameId]} className='game-images col-lg-3 col-md-3 col-sm-8'/>
                        <p className='game-description col-lg-8 col-md-8 col-sm-10'>{games.description}</p>
                    </div>
                </div>)
            )}

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