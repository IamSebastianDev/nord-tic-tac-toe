/** @format */

import { combined, mapped } from '@grainular/nord';
import { winner } from './winner.grain';
import { squares } from './squares.grain';

export const state = combined(
	[winner, mapped(squares)],
	([winner, squares]) => {
		return winner || squares.every((square) => square !== null);
	}
);
