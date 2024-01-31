/** @format */

import { grain } from '@grainular/nord';

export const squares = [
	...Array(9)
		.fill(null)
		.map((value) => grain<null | 'X' | 'O'>(value)),
];

export const resetSquares = () => squares.forEach((square) => square.set(null));
