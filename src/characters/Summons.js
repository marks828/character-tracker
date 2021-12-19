export default function Summons(props) {


    return(
        <>
        <div className='py-5 bg-green-200'>
            <h1 className='sm:grid justify-items-center'>Summon Health</h1>
            <div className='sm:grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button
                    className='text-5xl'
                    onClick={() => props.summon.setHealth(props.summo.health - 1)}
                >-</button>
                <p className='text-5xl' id="props.summon.id">{props.summon.health}</p>
                <button
                    className='text-5xl'
                    onClick={() => props.summon.setHealth(props.summon.health + 1)}
                >+</button>
            </div>
        </div>
        </>
    )


}