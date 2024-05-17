# React Markdown Editor App

This a markdown editor app created by using React Typescript
The app was deployed using (Netlify)[https://www.netlify.com/]

[Live site](https://as-markdowneditor.netlify.app/)
[Repo](https://github.com/aimansae/as-markdown-editor)

## Prerequisites

Before you start with this task, research what Markdown format is.

## Requirements

- Use the starter project, to kick-start your development.
- Create a new repository and push the starter as initial commit.
- Pick a styling solution of your choice. (CSS, SCSS, Modules, Tailwind, Styled components, Emotion)
- Implement the UI. Implement a side by side view. On the left side you enter/edit the markdown. On the right side you see the output which is updated as you type, rendered correctly as valid HTML.
  Keep it simple, it doesn’t have to be fully featured.
  You are allowed to use any library of your choice, which will parse the markdown automatically for you. If you decide not to, and parse it yourself, add support for at least: h1-h6, p, ul > li, strong and <a>
- Make sure the design is responsive. On mobile simply show either of the sides and make it switchable via button somewhere.

## Additional requirements

- Create a Github repository.
- Commit your changes regularly.
- Adjust your README.md to explain your project.
- Deploy it to Netlify for free and put the URL in the README.md
- An example app, that’s already existing out there in the world: [StackEdit](https://stackedit.io/app)

**Time limit:** 6 hours

## Getting Started

## [Cloning](https://www.youtube.com/watch?v=i8KuDon82KM&ab_channel=h3webdevtuts) from an existing starter project

1. Open VsCode
2. Click on Menu, View, Command Palette (Ctrl+Shift+P)
3. Type Git Clone
4. Paste the Github Link of the Starter project
5. Make sure there a no node_module files
6. In terminal add npm i

## Github Setup

1. Create a local folder and connect it to [Github](https://github.com/)

1. Open github and create new repository
1. Copy the link and in terminal add:

- git add .
- git commit -m 'Initial commit'
- git remote remove origin
- git remote add origin (paste the link to the Github repo here)
- git push origin master

3. If needed Enter credentials to connect the IDE to Github
4. Resources found on [Youtube](https://www.youtube.com/watch?v=vbQ2bYHxxEA)

### [Tailwind Installation](https://tailwindcss.com/docs/guides/vite)

1. In terminal type:
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p (creates tailwind.config.js file)

2. Configure template paths in tailwind.config.js add:
   content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],

3. Add Tailwind directives to index.css

   @tailwind base;
   @tailwind components;
   @tailwind utilities;

4. Order Classes automatically
   npm install -D prettier prettier-plugin-tailwindcss

5. Add plugin in prettierrc file:
   "plugins": ["prettier-plugin-tailwindcss"]

6. [Tailwind Typography plugin](https://tailwindcss.com/docs/plugins#typography)
   npm i -D @tailwindcss/typography

In tailwind.config.css add:
plugins: [require('@tailwindcss/typography')]

## [React markdown package](https://www.npmjs.com/package/react-markdown/v/8.0.6)

npm i react-markdown

### [Testing user event](https://testing-library.com/docs/user-event/install)
npm install --save-dev @testing-library/user-event

### TroubleShooting

- While running npm test encountered error:
ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\saeed\OneDrive\Desktop\Projects 2024\Markdown Editor\react-starter-project\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.

**Fixed**:

Replaced jest.config.js with jest-setup.ts and added:
import '@testing-library/jest-dom'
['<rootDir>/jest-setup.js']
In package.json added after vite:

      "vite": "^5.1.0"


"jest": {
"testEnvironment": "jsdom",
"transform": {
"^.+\\.tsx?$": "ts-jest",
      "^.+\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/node_modules/jest-transform-stub"
}
},
"include": [
"./jest-setup.ts"
]

- Validation Error:

Module <rootDir>/node_modules/jest-transform-stub in the transform option was not found.
<rootDir> is: C:\Users\saeed\OneDrive\Desktop\Projects
2024\Markdown Editor\react-starter-project

Configuration Documentation:
https://jestjs.io/docs/configuration


**Fixed**

npm install --save-dev jest-transform-stub

make sure to update your package.json to include it as a transform module.  
 transform: {
'^.+\\.jsx?$': 'babel-jest',
    '^.+\\.css$': 'jest-transform-stub', // Add this line for CSS files if needed
},


- While running npm test encountered the followed error
![Jest Error](/react-starter-project/src/assets/markdown-error.PNG)

**Fixed** 

Followed Option 1 solution from [Github react-markdown remarks](https://github.com/remarkjs/react-markdown/issues/635#issuecomment-956158474)

In src folder, created __mocks__
directory and within it created a react-markdown.tsx file with:

import React from "react";
interface ReactMarkdownProps {
  children: React.ReactNode;
}
function ReactMarkdown({ children }: ReactMarkdownProps) {
  return <>{children}</>;
}
export default ReactMarkdown;

Created  Jest.config.ts added:
added module.exports = {
  moduleNameMapper: {
    "^react-markdown$": "<rootDir>/src/__mocks__/react-markdown.tsx",
  },
};

