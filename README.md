# xiaodun-antd-design

## Getting Started

How to add components

1. Add files: index.ts index.less [components-name].tsx demos/index.md

2. Modify the src/index.ts

```ts
// ... other components
export {default as [newcomponents]} from './[newcomponents]';

```
3. git push the code

4. run npm publish


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

