/**
 * This is the big guy file that acutally defines the element. The source, if you will.
 */

import { html, css, LitElement } from 'lit';

export class HelloWorld extends LitElement {

  // returns basic styling for the element
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--hello-world-text-color, #000);
      }
    `;
  }

  // wow looks like we have some nice type annotations :)
  // returns the title and object properties that are contained in the object
  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  // this says that it is a constructor soooo I assume that it is instantiating the HelloWorld object, but not sure when it is called?
  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }
  
  // helper function that keeps track of the current counter value
  __increment() {
    this.counter += 1;
  }
  
  // function that actually returns HTML that will be inserted into the page when the hello-world element is referenced
  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
