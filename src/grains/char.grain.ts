/** @format */

import { combined, mapped } from '@grainular/nord';
import { squares } from './squares.grain';
import { gameState } from './game-state.grain';

export const char = combined(
	[mapped(squares), gameState],
	([squares, state]) => {
		const result =
			squares.reduce((acc, cur) => {
				return cur === null ? acc : cur === 'X' ? acc + 1 : acc - 1;
			}, 0) > 0;

		if (state.ended) {
			return result ? 'X' : 'O';
		}

		return result ? 'O' : 'X';
	}
);
