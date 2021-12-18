import '../index.css'
import { useState } from 'react';
import Summons from './Summons';

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

    function handleAddSummonClick(e){
        e.preventDefault();
        console.log('add summon');
    }



    return(
        <div id="character-container" className='sm:grid grid-rows-4 grid-flow-col gap-4'>
        <div className='py-5 bg-red-400'>
            <h1 className='sm:grid justify-items-center'>Health</h1>
            <div className='sm:grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button
                    onClick={healthDown}
                >Health Down</button>
                <p className=''>{health}</p>
                <button
                    onClick={healthUp}
                >Health Up</button>
            </div>
        </div>
        
        <div className='py-5 bg-blue-500'>
            <h1 className='sm:grid justify-items-center'>Experience</h1>
            <div className='sm:grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button className=''
                    onClick={experienceDown}
                >Experience Down</button>
                <p>{experience}</p>
                <button
                    onClick={experienceUp}
                >Experience Up</button>
            </div>
        </div>
        
        <div className='py-5 bg-amber-200'>
            <h1 className='sm:grid justify-items-center'>Gold</h1>
            <div className='sm:grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button
                    onClick={() => setGold(gold - 1)}
                >Gold Down</button>
                <p>{gold}</p>
                <button
                    onClick={() => setGold(gold + 1)}
                >Gold Up</button>
            </div>
        </div>
        
        <button onClick={handleAddSummonClick}>Add Summon</button>

        
        
        <Summons 
            health={health}
            setHealth={setHealth}
        />
        </div>
    )
}

export default Character;