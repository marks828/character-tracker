// import { useState } from 'react';
import { nanoid } from 'nanoid';
function Perks() {
	return (
		<>
			{/* start of tinkerer perks */}
			<div className='perks' id='tinkerer'>
				<div>
					<label htmlFor=''>
						remove two -1 cards
						<input type='checkbox' name='' id={nanoid()} />
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						replace one -2 card with one +0
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						remove four +0 cards
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						add one +3 card
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						add one any element card
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						add three muddle cards
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						add one wound card
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						add one immobilize card
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						add one +1 card +2 heal card
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						add one +0 plus one target card
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>

				<div>
					<label htmlFor=''>
						add one +0 refresh an item card
						<input type='checkbox' name='' id={nanoid()} />
					</label>
				</div>
			</div>
			{/* end of tinkerer perks */}
		</>
	);
}

export default Perks;
