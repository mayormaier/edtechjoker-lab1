import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../hello-world.js';

// I assume that this is a testing framework for the element, but i am not exactly sure how any of this is evaluated. To the JS docs I go!
describe('HelloWorld', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<hello-world></hello-world>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<hello-world></hello-world>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<hello-world title="attribute title"></hello-world>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<hello-world></hello-world>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
