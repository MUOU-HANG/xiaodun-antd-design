export default {
  esm: 'babel', // 通过 babel 编译相关组件即可，而无需打包在一个文件中，实现在使用时可按需加载。
  cjs: 'babel',
  // umd: {
  //   name: 'xdad',
  //   sourcemap: true,
  //   globals: {
  //     react: 'React',
  //     antd: 'antd'
  //   },
  // },
  entry:"src/index.ts",
  lessInBabelMode: true, // less 转 css
  cssModules: false, // 开始cssModule功能
  extractCSS:true,
  // 打包的产物若需引入 antd ，则通过按需加载形式引入。
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
