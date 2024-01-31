/** @format */

import { combined, mapped } from '@grainular/nord';
import { winner } from './winner.grain';
import { squares } from './squares.grain';

export const gameState = combined(
	[winner, mapped(squares)],
	([winner, squares]) => {
		const state = {
			ended: winner || squares.every((square) => square !== null),
		};
		return state;
	}
);
