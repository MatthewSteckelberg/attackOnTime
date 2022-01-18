import Navbar from '../navbar/Navbar';
import './highStyle.css';
import { useState, useEffect } from 'react';

function HighScores(userObject) {

    const [scoresList, setScoresList] = useState([]);

    const getAllScores = () => {
        return fetch("http://localhost:8080/api/highscores")
            .then((response) => response.json())
            .then((data) => setScoresList(data));
    }

    useEffect(() => {
        getAllScores();
        console.log(scoresList);
    }, []);

    let i = 1;
    return (
        <div className='scores-body'>
            <Navbar userObject={userObject}/>
            <h1 id='scores-header'>High Scores</h1>
            <div className='row'>
                <div className='col-md-3'></div>
                <div id='scores-section' className='col-md-6'>
                    <table className='table' id='scores-table'>
                        <thead>
                            <tr id='headers-row'>

                                <th className='table-header' scope='col'>Rank</th>
                                <th className='table-header' scope='col'>User Name</th>
                                <th className='table-header' scope='col'>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scoresList.map(score=>
                                <tr key={score.highScoreId}>
                                    <td>{i++}</td>
                                    <td>{score.userName}</td>
                                    <td>{score.highScore}</td>
                                </tr>)}
                        </tbody>
                    </table>

                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    )
}

export default HighScores;