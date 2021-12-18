import { useState } from 'react';

function Character(){

    const [health, setHealth] = useState(0);
    const [experience, setExperience] = useState(0);
    const [gold, setGold] = useState(0);

    function healthUp(){
        setHealth(health + 1);
    }

    function healthDown(){
        setHealth(health - 1);
    }

    function experienceUp(){
        setExperience(experience + 1);
    }

    function experienceDown(){
        setExperience(experience - 1);
    }



    return(
        <>
        <h1>Health</h1>
        <button 
            onClick={healthUp}
        >Health Up</button>
        <p>{health}</p>
        <button
            onClick={healthDown}
        >Health Down</button>


        <h1>Experience</h1>
        <button
            onClick={experienceUp}
        >Experience Up</button>
        <p>{experience}</p>
        <button
            onClick={experienceDown}
        >Experience Down</button>

        <h1>Gold</h1>
        <button
            onClick={() => setGold(gold + 1)}
        >Gold Up</button>
        <p>{gold}</p>
        <button
            onClick={() => setGold(gold - 1)}
        >Gold Down</button>
        </>
    )
}

export default Character;