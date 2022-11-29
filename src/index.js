import {sum} from './modules/sum';

const root = document.querySelector('#root');
root.textContent = sum(6, -1).toString();

// new code
console.log(root);

// test your code
try {
    console.log(console.log)
} catch (error) {
    console.error(error)
}

// for a commit!
const a = null;