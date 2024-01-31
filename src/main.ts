/** @format */

import { Board } from './components/Board';
import './style.css';
import { createComponent, render } from '@grainular/nord';

const App = createComponent((html) => {
	return html`${Board({})}`;
});

render(App, { target: document.querySelector('#app') });
