# Question 1
## Open package.json and look at the scripts devDependencies and dependencies sections. What do you think each section does here? What commands can you run?
__________________
Each section has its own purpose within the files. The difference between devDependencies and dependencies is that dev is specific to performance on non production environments. Dependencies is required for runtime. The commands that you can run are listed up scripts such as they are analyze, start, lint, format, test, test:watch, storybook, storybook:build.

Below listed is blocks from package.json:

```
"dependencies": {
        "lit": "^2.0.2"
      },

      "devDependencies": {
        "@custom-elements-manifest/analyzer": "^0.4.17",
        "@open-wc/eslint-config": "^4.3.0",
        "@open-wc/testing": "next",
        "@web/dev-server": "^0.1.28",
        "@web/dev-server-storybook": "^0.0.2",
        "@web/test-runner": "^0.13.22",
        "eslint": "^7.32.0",
        "eslint-config-prettier": "^8.3.0",
        "husky": "^4.3.8",
        "lint-staged": "^10.5.4",
        "prettier": "^2.4.1"
      }
```

```
"scripts": {
    "analyze": "cem analyze --litelement",
    "start": "web-dev-server",
    "lint": "eslint --ext .js,.html . --ignore-path .gitignore && prettier \"**/*.js\" --check --ignore-path .gitignore",
    "format": "eslint --ext .js,.html . --fix --ignore-path .gitignore && prettier \"**/*.js\" --write --ignore-path .gitignore",
    "test": "web-test-runner --coverage",
    "test:watch": "web-test-runner --watch",
    "storybook": "npm run analyze -- --exclude dist && web-dev-server -c .storybook/server.mjs",
    "storybook:build": "npm run analyze -- --exclude dist && build-storybook"
 },
  ```

# Question 2
## The "demo" for your hello-world element is found in index.html. Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript?
__________________
index.html is under the demo within hello-world. It renders the hello world and the demo, calls a web component. <hello-world> tag helps it load, while the HTML for the file is rendering via JavaScript through the imported lit.

```  <script type="module">
    import { html, render } from 'lit';
    import '../hello-world.js';

    const title = 'Hello World!';
    // takes elements with id=demo and replaces with hello-world element
    render(
      html`
        <hello-world .title=${title}>
          some light-dom
        </hello-world>
      `,
      document.querySelector('#demo')
    );
  </script>
  ```

# Question 3
## The Definition of your element is in your-element-name.js, while the class JS object is found in src/YourElementName.js. Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object? Leaving comments either in the source via // or in your
__________________
They are separate files and they have different specifications. The difference is that it defines and add function. An example of this is the difference between hello-world.js and HelloWorld.js. hello-world.js gets from the class made in HelloWorld.js. On the other hand, HelloWorld.js is a web component for the functionality of the component.

From hello-world.js:
```
// imports the HelloWorld class from the source files
import { HelloWorld } from './src/HelloWorld.js';

// defines the "<hello-world>" HTML tag from the HelloWorld class in the imported module
window.customElements.define('hello-world', HelloWorld);
```

# Question 4
## Try to explain what Lit is providing to the repo. What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever?
__________________
Lit provides a library and a resource for web components. Lit is special because it can be considered a helper, a standard web component, for example HTML for all sights across all different kind of platforms. This is why it can be considered to change the game and how the web is developed. It can handle the styles, properties, and how it renders.