# react-cosmos-background-proxy

Easily apply both global and fixture specific background settings for [react-cosmos](https://github.com/react-cosmos/react-cosmos)

#### Installation

```
npm install --save-dev react-cosmos-background-proxy
```

## Usage

### Basic

```js
// cosmos.proxies.js
import createBackgroundProxy from "react-cosmos-background-proxy";

export default [
    createBackgroundProxy()
];
```

```js
// __fixtures__/example.js
export default {
  component: MyComponent,
  // will apply this style to the <body> element of the fixture iFrame
  background: {
      backgroundColor: 'white'
  }
};
```

### Global Styling

```js
// cosmos.proxies.js
import createBackgroundProxy from "react-cosmos-background-proxy";

export default [
    createBackgroundProxy(() => {
        // this will be invoked for every fixture
        require('node_modules/some-css-framework/dist/styles.css');
    })
];
```

_Contributions are more than welcome! :beers:_