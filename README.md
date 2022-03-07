# xiaodun-antd-design

## Getting Started

How to add components

Run the script `npm run create <components-name> <file-name>`;

components-name: The folder name and import/export name;
file-name: src/<components-name>/<file-name>.tsx

eg: `npm run plop Test test`

Then you will see this in /src:

- src
  - Test
    - test.tsx
    - index.ts
    - index.less
    - index.md

```ts
// ... other components
export {default as [newcomponents]} from './[newcomponents]';

```
1. git push the code

2. run npm publish


Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Run test,

```bash
$ npm test
```

Build library via `father-build`,

```bash
$ npm run build
```

