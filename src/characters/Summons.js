import { useState } from "react";

export default function Summons(props) {

    const [summonHealth, setSummonHealth] = useState(0);

    function summonHealthUp(id){
        const increaseSummonHealth = summons.map(summon => {
            if(summon.id === id){
                
                console.log(summon)
                return {...summon, summonHealth: summon.summonHealth + 1};
            }
            return summon;
        })
        setSummons(increaseSummonHealth);
    }
    
    function summonHealthDown(id){
        const decreaseSummonHealth = summons.map(summon => {
            if(summon.id === id){
                
                console.log(summon)
                return {...summon, summonHealth: summon.summonHealth + 1};
            }
            return summon;
        })
        setSummons(decreaseSummonHealth);
    }

    function deleteSummon(id) {
        const deleteSummon = summons.filter(summon => summon.id !== id);
        console.log(deleteSummon);
        setSummons(deleteSummon);
    }

    return(
        <div className='py-5 bg-green-200'>
            <h1 className='sm:grid justify-items-center'>Summon Health</h1>
            <div className='sm:grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button
                    className='text-5xl'
                    onClick={summonHealthDown}
                >-</button>
                <p className='text-5xl' id={props.summon.id}>{summonHealth}</p>
                <button
                    className='text-5xl'
                    onClick={summonHealthUp}
                >+</button>
            </div>
            <button onClick={() => deleteSummon(props.summon.id)}>Kill</button>
        </div>
    )


}