import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

function Summons() {
	const [summons, setSummons] = useState(() => {
		const savedSummons = localStorage.getItem('summons');
		const parsedSummons = JSON.parse(savedSummons);
		return parsedSummons || [];
	});

	function SummonHealthUp(id) {
		const increaseSummonHealth = summons.map((summon) => {
			if (summon.id === id) {
				console.log(summon);
				return { ...summon, summonHealth: summon.summonHealth + 1 };
			}
			return summon;
		});
		setSummons(increaseSummonHealth);
	}

	function SummonHealthDown(id) {
		const decreaseSummonHealth = summons.map((summon) => {
			if (summon.id === id) {
				console.log(summon);
				return { ...summon, summonHealth: summon.summonHealth - 1 };
			}
			return summon;
		});
		setSummons(decreaseSummonHealth);
	}

	// function handleAddSummonClick(e){
	//     e.preventDefault();
	//     console.log('add summon');
	//     setRenderSummon(true);
	// }

	function handleLogClick(e) {
		e.preventDefault();
		console.log(summons);
	}

	function deleteSummon(id) {
		const deleteSummon = summons.filter((summon) => summon.id !== id);
		console.log(deleteSummon);
		setSummons(deleteSummon);
	}

	useEffect(() => {
		localStorage.setItem('summons', JSON.stringify(summons));
	}, [summons]);

	return (
		<>
			<div className='grid'>
				<button
					className='my-10 mx-auto text-2xl'
					onClick={() =>
						setSummons([
							...summons,
							{ id: nanoid(), summonHealth: 0 },
						])
					}>
					Add Summon
				</button>
				<button onClick={handleLogClick}>log</button>
			</div>

			{summons.map((summon) => {
				// summon is the object in the array
				return (
					<div className='grid py-5 bg-green-200'>
						<h1 className='sm:grid justify-items-center'>
							Summon Health
						</h1>
						<div className='sm:grid grid-cols-3 gap-2 justify-items-center place-items-center'>
							<button
								className='text-5xl'
								onClick={() => SummonHealthDown(summon.id)}>
								-
							</button>
							<p className='text-5xl' id={summon.id}>
								{summon.summonHealth}
							</p>
							<button
								className='text-5xl'
								onClick={() => SummonHealthUp(summon.id)}>
								+
							</button>
						</div>
						<button
							className='self-center'
							onClick={() => deleteSummon(summon.id)}>
							Kill
						</button>
					</div>
				);
			})}
		</>
	);
}

export default Summons;
