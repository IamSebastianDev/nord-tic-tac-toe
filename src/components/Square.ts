/** @format */

import { Grain, createComponent, on } from '@grainular/nord';
import { char } from '../grains/char.grain';
import { gameState } from '../grains/game-state.grain';

export type SquareProps = { field: Grain<null | 'O' | 'X'> };

export const Square = createComponent<SquareProps>((html, { field }) => {
	const handleClick = () => {
		if (field() || gameState().ended) return;
		field.set(char());
	};

	return html`<button type="${field}" ${on('click', handleClick)}>
		${field}
	</button>`;
});

Square.setStyle(
	(css) => css`
		button {
			padding: 0;
			aspect-ratio: 1/1;
			width: 4.5rem;
		}

		button[type='X'] {
			background: var(--ui-color-accent);
		}

		button[type='O'] {
			background: var(--ui-color-contrast);
		}
	`
);
