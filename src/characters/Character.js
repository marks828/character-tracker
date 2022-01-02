import '../index.css'
import { useState,  useEffect } from 'react';
import { nanoid } from 'nanoid';


function Character(){

    const [health, setHealth] = useState(0);
    const [experience, setExperience] = useState(0);
    const [gold, setGold] = useState(0);
    const [summons, setSummons] = useState(() => {
        const savedSummons = localStorage.getItem('summons');
        const parsedSummons = JSON.parse(savedSummons);
        return parsedSummons || [];
    });

    
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

    function SummonHealthUp(id){
        const increaseSummonHealth = summons.map(summon => {
            if(summon.id === id){
                
                console.log(summon)
                return {...summon, summonHealth: summon.summonHealth + 1};
            }
            return summon;
        })
        setSummons(increaseSummonHealth);
    }
    
    function SummonHealthDown(id){
        const decreaseSummonHealth = summons.map(summon => {
            if(summon.id === id){
                
                console.log(summon)
                return {...summon, summonHealth: summon.summonHealth - 1};
            }
            return summon;
        })
        setSummons(decreaseSummonHealth);
    }

    // function handleAddSummonClick(e){
    //     e.preventDefault();
    //     console.log('add summon');
    //     setRenderSummon(true);
    // }

    function handleLogClick(e){
        e.preventDefault();
        console.log(summons);
    }


    function deleteSummon(id) {
        const deleteSummon = summons.filter(summon => summon.id !== id);
        console.log(deleteSummon);
        setSummons(deleteSummon);
    }

    useEffect(() => {
        localStorage.setItem('summons', JSON.stringify(summons));

    }, [summons]);

    return(
    <div id="sheet-container" className='
        
    '>
        <div id="character-container" className='

        '>
        <div className='py-5 bg-red-400'>
            <h1 className='grid justify-items-center'>Health</h1>
            <div className='grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button
                    className='text-5xl'
                    onClick={healthDown}
                >-</button>
                <p className='text-5xl'>{health}</p>
                <button 
                    className='text-5xl'
                    onClick={healthUp}
                >+</button>
            </div>
        </div>
        
        <div className='py-5 bg-blue-500 w-full'>
            <h1 className='grid justify-items-center'>Experience</h1>
            <div className='grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button 
                    className='text-5xl'
                    onClick={experienceDown}
                >-</button>
                <p className='text-5xl'>{experience}</p>
                <button 
                    className='text-5xl'
                    onClick={experienceUp}
                >+</button>
            </div>
        </div>
        
        <div className='py-5 bg-amber-200'>
            <h1 className='grid justify-items-center'>Gold</h1>
            <div className='grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button 
                    className='text-5xl'
                    onClick={() => setGold(gold - 1)}
                >-</button>
                <p className='text-5xl'>{gold}</p>
                <button 
                    className='text-5xl'
                    onClick={() => setGold(gold + 1)}
                >+</button>
            </div>



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
        

        </div>
        <div 
            className='grid'
        >
        <button
            className='my-10 mx-auto text-2xl'
            onClick={() => setSummons([...summons, {id: nanoid(), summonHealth: 0}])}
        >Add Summon</button>
        <button onClick={handleLogClick}>log</button>
        </div>

            {summons.map(summon => {    // summon is the object in the array
            return(
                <div className='grid py-5 bg-green-200'>
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
                    <button
                        className='self-center'
                        onClick={() => deleteSummon(summon.id)}
                    >Kill</button>
                </div>
            )
        })}

        </div> 
        {/* end of character container div */}
        {/* start of perks-and-stats div */}
        <div id="perks-and-stats" className='
            
        '>
            <div>
                <label htmlFor="">remove two -1 cards
                    <input type="checkbox" name="" id="" />
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">replace one -2 card with one +0
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">remove four +0 cards
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">add one +3 card
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">add one any element card
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">add three muddle cards
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">add one wound card
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">add one immobilize card
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">add one +1 card +2 heal card
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">add one +0 plus one target card
                    <input type="checkbox" name="" id="" />
                </label>
            </div>

            <div>
                <label htmlFor="">add one +0 refresh an item card
                    <input type="checkbox" name="" id="" />
                </label>
            </div>
                
            
        </div>


    </div>
    )
}

export default Character;