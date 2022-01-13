import { useState } from 'react';
import { Tinkerer } from './Tinkerer';

function Perks() {
	const [perks, setPerks] = useState(Tinkerer);
	// console.log('perks', perks[0].perkDescription);

	function handlePerkClick(id) {
		const newPerks = [...perks];
		const perk = newPerks.find((perk) => perk.perkId === id);
		perk.perkTaken = !perk.perkTaken;
		setPerks(newPerks);
		console.log('perk', perk);
	}

	return (
		<div className='perks' id='tinkerer'>
			{/* start of tinkerer perks */}
			{perks.map((perk) => (
				<div key={perk.perkId}>
					<label htmlFor=''>
						{perk.perkDescription}
						<input
							type='checkbox'
							name=''
							id={perk.PerkId}
							onChange={() => handlePerkClick(perk.perkId)}
						/>
					</label>
				</div>
			))}
		</div>
	);
}

export default Perks;
