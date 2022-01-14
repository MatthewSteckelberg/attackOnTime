import Navbar from '../navbar/Navbar';
import './highStyle.css';
import { useState, useEffect } from 'react';

function HighScores() {

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


    return (
        <div className='scores-body'>
            <Navbar />
            <h1 id='scores-header'>High Scores</h1>
            <div className='row'>
                <div className='col-md-3'></div>
                <div id='scores-section' className='col-md-6'>
                    <table className='table' id='scores-table'>
                        <thead>
                            <tr>
                                <th className='table-header' scope='col'>Score</th>
                                <th className='table-header' scope='col'>User Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scoresList.map(score =>
                                <tr key={score.highScoreId}>
                                    <td>{score.highScore}</td>
                                    <td>{score.userName}</td>
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