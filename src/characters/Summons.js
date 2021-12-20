import { useState } from "react";

export default function Summons(props) {

    const [summonHealth, setSummonHealth] = useState(0);

    function SummonHealthUp() {
        props.summons.map(summon => {
            if(summon.id === props.summon.id){
                setSummonHealth(summonHealth + 1);
            }
            return summon;
        });
    }

    function summonHealthDown() {
        props.summons.map(summon => {
            if(summon.id === props.summon.id){
                setSummonHealth(summonHealth - 1);
            }
            return summon;
        });
    }

    function deleteSummon(id) {
        const deleteSummon = props.summons.filter(summon => summon.id !== id);
        console.log(deleteSummon);
        props.setSummons(deleteSummon);
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
                    onClick={SummonHealthUp}
                >+</button>
            </div>
            <button onClick={() => deleteSummon(props.summon.id)}>Kill</button>
        </div>
    )


}