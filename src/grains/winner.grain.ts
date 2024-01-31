/** @format */

import { combined } from '@grainular/nord';
import { squares } from './squares.grain';
import { checkWinner } from '../utils/check-winner';

export const winner = combined(squares, (squares) => {
	return !!checkWinner(squares);
});
