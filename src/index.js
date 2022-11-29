import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(6, -1).toString();

// new code
console.log(root);