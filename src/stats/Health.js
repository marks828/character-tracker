import { useState, useEffect } from 'react';

function Health() {
	const [health, setHealth] = useState(() => {
		const health = localStorage.getItem('health');
		return health ? parseInt(health) : 0;
	});

	function healthUp() {
		setHealth(health + 1);
	}

	function healthDown() {
		setHealth(health - 1);
	}

	useEffect(() => {
		localStorage.setItem('health', JSON.stringify(health));
	}, [health]);

	return (
		<div className='py-5 bg-red-400'>
			<h1 className='grid justify-items-center'>Health</h1>
			<div className='grid grid-cols-3 gap-2 justify-items-center place-items-center'>
				<button className='text-5xl' onClick={healthDown}>
					-
				</button>
				<p className='text-5xl'>{health}</p>
				<button className='text-5xl' onClick={healthUp}>
					+
				</button>
			</div>
		</div>
	);
}

export default Health;
