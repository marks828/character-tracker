import { useState } from "react";

export function StatTracker(props){

    const [currentValue, setCurrentValue] = useState(0);;


    return(
        <div className={`py-5 ${props.bgcolor}
        `}>
            
            <h1 className='grid justify-items-center'>{props.title}</h1>
            <div className='grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button 
                    className='text-5xl'
                    onClick={() => setCurrentValue(currentValue - 1)}
                >-</button>
                <p className='text-5xl'>{currentValue}</p>
                <button 
                    className='text-5xl'
                    onClick={() => setCurrentValue(currentValue + 1)}
                >+</button>
            </div>
        
        </div>
    )
}