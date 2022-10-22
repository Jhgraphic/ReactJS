import React, { useState, useEffect } from 'react';
import { getRandomJoke } from '../services/randomJokesService';
import Button from '@mui/material/Button';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const RandomJokes = () => {

    const [joke, setJoke] = useState(null);
    const [positiveVote, setPositiveVote] = useState(0);
    const [negativeVote, setNegativeVote] = useState(0);

    useEffect(() => {
        getRandomJoke()
    }, []);

    const obtainJoke = () => {
        getRandomJoke()
            .then((response) => {
                setJoke(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const countVote = (setCounter, counter) => {
        setCounter(counter + 1)
        obtainJoke()
    }

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',}}> 
        { joke !== null ? 
        (
            <div style={{ width: '700px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px',
                padding: '20px',}}>
            {/* <img alt='Chuck Norris' src={joke.icon_url} /> */}
            <blockquote>{joke.value}</blockquote>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '20px',}}>
                    <Button style={{backgroundColor: 'green', fontWeight: 'bold'}} variant="contained" startIcon={<ThumbUpIcon />} onClick={() => countVote(setPositiveVote, positiveVote)}>
                        {positiveVote}
                    </Button>
                    <Button style={{backgroundColor: 'red', fontWeight: 'bold'}} variant="contained" startIcon={<ThumbDownIcon />}  onClick={() => countVote(setNegativeVote, negativeVote)}>
                        {negativeVote}
                    </Button>
                </div>
            </div>
        ) : (
        <div>
            <Button variant="contained" onClick={obtainJoke}>
                Generate joke
            </Button>
        </div>
        )
        }
        </div>
    );
}

export default RandomJokes;
