/** @format */

import { createComponent, derived, each, get, on, when } from '@grainular/nord';
import { Square } from './Square';
import { resetSquares, squares } from '../grains/squares.grain';
import { gameState } from '../grains/game-state.grain';
import { char } from '../grains/char.grain';
import { winner } from '../grains/winner.grain';

export const Board = createComponent((html) => {
	const handleResetGameClick = () => {
		resetSquares();
	};

	const message = derived(winner, (winner) =>
		winner ? 'Winner' : 'Next player'
	);

	return html`<h1>${message}: ${char}</h1>
		<div class="board">
			${each(squares).as((field) => html`${Square({ field })}`)}
		</div>
		${when(get(gameState, 'ended')).then(
			html`<button ${on('click', () => handleResetGameClick())}>
				Restart Game
			</button>`
		)} `;
});

Board.setStyle(
	(css) => css`
		.board {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			border: 1px solid var(--theme-color-text);
		}
	`
);
