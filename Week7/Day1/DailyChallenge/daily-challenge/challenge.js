import { greet } from './greeting.js';
import { colorfulMessage } from './colorful-message.js';
import { readFileContent } from './read-file.js';

const name=greet('Fry');
console.log(name);
colorfulMessage()

readFileContent();