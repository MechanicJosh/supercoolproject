import React, { useState } from 'react';
import './styles.css'
import moment from 'moment';

const App = () => {

    const [input,setInput] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [chirps, setChirps] = useState([
        {name: 'fordBro', text: 'WranglerStar is getting a little craaazy', timestamp: 'Friday, August 9, 2024 9:00 AM'},
        {name: 'tacoBell_Official', text: 'Josh is our #1 Customer!', timestamp: 'Saturday, August 10, 2024 6:30 PM'}, 
        {name: 'yourFriendDuane', text: 'keep your head down on that golf swing!', timestamp: 'Monday, August 12, 2024 5:00 PM'}
    ]);

    const addChirp = (e) => {
        e.preventDefault();
        const newChirp = {name: nameInput, text: input, timestamp: moment().format('LLLL')};
        setChirps([...chirps,newChirp]);
        setInput('');
        setNameInput('');
    };

    return(
        <>
        <div className='appContainer'> 
            <form className='inputForm' onSubmit={addChirp} action="">
                <input placeholder='UserName' value={nameInput} className='usernameInput' onChange={(e) => setNameInput(e.target.value)} type="text" />
                <input placeholder='What are you thinking..?' value={input} onChange={(e) => setInput(e.target.value)} className='chirpInput' type="text" />
                <button type='submit' className='chirpBtn'>Chirp!</button>
            </form>
            <div className='chirpList'>
                {chirps.map((chirp, index) => (
                    <div key={index} className='chirp'>
                        <p className='chirpName'>@{chirp.name}</p>
                        <p className='chirpText'>{chirp.text}</p>
                        <p className='chirpTimeStamp'>{chirp.timestamp}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default App;