import { useState, useEffect } from 'react';

function Experience() {
	const [experience, setExperience] = useState(() => {
		const exp = localStorage.getItem('experience');
		return exp ? parseInt(exp) : 0;
	});

	function experienceUp() {
		setExperience(experience + 1);
	}

	function experienceDown() {
		setExperience(experience - 1);
	}

	useEffect(() => {
		localStorage.setItem('experience', JSON.stringify(experience));
	}, [experience]);
	return (
		<div className='py-5 bg-blue-500 w-full'>
			<h1 className='grid justify-items-center'>Experience</h1>
			<div className='grid grid-cols-3 gap-2 justify-items-center place-items-center'>
				<button className='text-5xl' onClick={experienceDown}>
					-
				</button>
				<p className='text-5xl'>{experience}</p>
				<button className='text-5xl' onClick={experienceUp}>
					+
				</button>
			</div>
		</div>
	);
}

export default Experience;
