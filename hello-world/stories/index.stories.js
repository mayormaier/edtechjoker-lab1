import { html } from 'lit';
import '../hello-world.js';

/**
 * According to Storybook JS Docs:
 * A story captures the rendered state of a UI component. Developers write multiple stories per component that describe all the “interesting” states a component can support.
 * 
 * Summary: This defines the different forms that an object can take when it is rendered on the page
 * i.e., someone can use the default element state, or they can specify their own title, counter, or "slotted content"
 */

export default {
  title: 'HelloWorld',
  component: 'hello-world',
  argTypes: {
    title: { control: 'text' },
    counter: { control: 'number' },
    textColor: { control: 'color' },
  },
};

function Template({ title = 'Hello world', counter = 5, textColor, slot }) {
  return html`
    <hello-world
      style="--hello-world-text-color: ${textColor || 'black'}"
      .title=${title}
      .counter=${counter}
    >
      ${slot}
    </hello-world>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
  counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
  slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
  slot: { table: { disable: true } },
};
