# xiaodun-antd-design

## Getting Started

### How to add components and publish

1. Run the script `npm run plop <components-name> <file-name>`;

components-name: The folder name and import/export name （The first letter is capitalized）;
file-name: src/<components-name>/<file-name>.tsx

eg: `npm run plop Test test`

Then you will see this in /src:

- src
  - Test
    - style
      - index.less
    - demos
      - index.tsx
    - test.tsx
    - index.md

1. npm run patch (1.x.0 -> 1.x.1)

2. git push the code

3. run npm publish


Install dependencies,

```bash
$ npm install
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

