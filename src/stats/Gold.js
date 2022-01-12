import { useState, useEffect } from 'react';
function Gold() {
	const [gold, setGold] = useState(() => {
		const gold = localStorage.getItem('gold');
		return gold ? parseInt(gold) : 0;
	});

	useEffect(() => {
		localStorage.setItem('gold', JSON.stringify(gold));
	}, [gold]);

	return (
		<div className='py-5 bg-amber-200'>
			<h1 className='grid justify-items-center'>Gold</h1>
			<div className='grid grid-cols-3 gap-2 justify-items-center place-items-center'>
				<button className='text-5xl' onClick={() => setGold(gold - 1)}>
					-
				</button>
				<p className='text-5xl'>{gold}</p>
				<button className='text-5xl' onClick={(e) => setGold(gold + 1)}>
					+
				</button>
			</div>
		</div>
	);
}

export default Gold;
