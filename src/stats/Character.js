import '../index.css';
import Health from './Health';
import Experience from './Experience';
import Gold from './Gold';
import Summons from './Summons';
import Perks from './perks/Perks';

function Character() {
	return (
		<div id='sheet-container' className=''>
			<div id='character-container' className=''>
				<Health />
				<Experience />
				<Gold />
				<Summons />
			</div>
			{/* end of character container div */}
			{/* start of perks-and-stats div */}
			<div id='perks-and-stats' className=''>
				<Perks />
			</div>
		</div>
	);
}

export default Character;
