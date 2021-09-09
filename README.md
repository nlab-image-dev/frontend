# frontend

ローカルに落とした後に以下を実行

```bash
npm init
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install --save-dev react react-dom
npm install --save-dev @babel/plugin-proposal-decorators react-redux react-router react-router-dom redux redux-logger redux-promise-middleware redux-thunk axios
npm install --save-dev babel-plugin-react-html-attrs
npm install --save-dev react-bootstrap
npm install --save-dev @babel/polyfill
```

また, webpack.config.jsのentryを以下に変更
```
 entry: ['@babel/polyfill', './/client.js']
```
