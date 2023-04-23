import { decorateContext } from './middlewares/decorateContext.js';

import { page, render } from './utils/lib.js';

const main = document.getElementById('main-content');
export const renderMain = (content) => render(content, main);

console.log('App is running... ');

page(decorateContext);

page.start();
