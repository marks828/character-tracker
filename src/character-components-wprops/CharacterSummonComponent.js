import '../index.css'
import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { StatTracker } from './StatTracker';


function Character(){

    const [statTracker, setStatTracker] = useState(0)

    
    // function handleAddSummonClick(e){
    //     e.preventDefault();
    //     console.log('add summon');
    //     setRenderSummon(true);
    // }

    function handleLogClick(e){
        e.preventDefault();
        // console.log(summons);
    }


    return(
        <div id="character-container" className='
            grid grid-cols-1 
            sm:grid-cols-1 
            md:grid-cols-3 
            lg:grid-cols-3 
            xl:grid-cols-3 
            sm:gap-0
            md:gap-5
        '>
        
        <StatTracker 
            title='Health'
            type='health'
            bgcolor='bg-red-400'
        />
        
        <StatTracker
            title='Experience'
            type='experience'
            bgcolor='bg-blue-500'
        />

        <StatTracker
            title='Gold'
            type='gold'
            bgcolor='bg-amber-200'
        />
        
        

        {/* {summons.map(summon => {    // summon is the object in the array
            return(
                <div className='py-5 bg-green-200'>
                    <h1 className='sm:grid justify-items-center'>Summon Health</h1>
                    <div className='sm:grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                        <button
                            className='text-5xl'
                            onClick={() => SummonHealthDown(summon.id)}
                        >-</button>
                        <p className='text-5xl' id={summon.id}>{summon.summonHealth}</p>
                        <button
                            className='text-5xl'
                            onClick={() => SummonHealthUp(summon.id)}
                        >+</button>
                    </div>
                    <button onClick={() => deleteSummon(summon.id)}>Kill</button>
                </div>
            )
        })} */}



        {/* map all summons to page */}
        {/* {summons.map(summon => {    // summon is the object in the array
            return( 
                <Summons
                    key={nanoid()}
                    summon={summon}
                    summons={summons}
                    setSummons={setSummons}
                />
            )
        })} */}

        {/* {allSummons.map((summon) => {
            return(
            <Summons 
                id={id}
                health={summonHealth}
                setHealth={setSummonHealth}
            />
            )
        })}      */}
        
        <button
            // onClick={() => setSummons([...summons, {id: nanoid(), summonHealth: 0}])}
        >Add Summon</button>
        <button onClick={handleLogClick}>log</button>

        
        
        
        </div>
    )
}

export default Character;