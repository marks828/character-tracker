export default function Summons(props) {


    return(
        <>
        <div className='py-5 bg-green-200'>
            <h1 className='sm:grid justify-items-center'>Summon Health</h1>
            <div className='sm:grid grid-cols-3 gap-2 justify-items-center place-items-center'>
                <button
                    onClick={() => props.setHealth(props.health - 1)}
                >Health Down</button>
                <p>{props.health}</p>
                <button
                    onClick={() => props.setHealth(props.health + 1)}
                >Health Up</button>
            </div>
        </div>
        </>
    )


}