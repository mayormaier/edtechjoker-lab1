
// imports the HelloWorld class from the source files
import { HelloWorld } from './src/HelloWorld.js';

// defines the "<hello-world>" HTML tag from the HelloWorld class in the imported module
window.customElements.define('hello-world', HelloWorld);
