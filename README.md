# vue-native-back [![NPM version](https://img.shields.io/npm/v/vue-native-back)](https://npmjs.com/package/vue-native-back) [![NPM downloads](https://img.shields.io/npm/dm/vue-native-back)](https://npmjs.com/package/vue-native-back) [![issues](https://img.shields.io/npm/l/vue-native-back)](https://github.com/luoxuhai/vue-native-back/blob/master/LICENSE)

> 使用返回键关闭模态框的 vue 插件

## Demo

- [在线演示](https://suspicious-neumann-53c4f5.netlify.app)
- [CodeSandbox](https://codesandbox.io/s/vuejsyanxi-cgk4l)

## Install

```bash
npm install vue-native-back --save
# or
yarn add vue-native-back
```

## Usage

### vue2.0

```js
import Vue from "vue";
import NativeBack from "vue-native-back";

Vue.use(NativeBack);
```

### vue3.0

```js
import { createApp } from "vue";
import NativeBack from "vue-native-back";
import App from "./App.vue";

createApp(App).use(NativeBack);
```

```html
<native-back
  :state="[visibleAlert, visibleConfirm]"
  :closeMethods="[onCloseAlert, onCloseConfirm]"
/>
```

```js
  data() {
    return {
      visibleAlert: false,
      visibleConfirm: false
    };
  },
  methods: {
    onCloseAlert() {
      this.visibleAlert = false;
    },
    onCloseConfirm() {
      this.visibleConfirm = false;
    }
  }
```

## Example

See [src/](https://github.com/luoxuhai/vue-native-back/blob/master/src)

## Options

| Property | Description  | Type    | Default |
| -------- | ------------ | ------- | ------- |
| enable   | 是否启动插件 | boolean | true    |

## Props

| Property     | Description      | Type              | Default |
| ------------ | ---------------- | ----------------- | ------- |
| state        | 模态框的显示状态 | Array\<boolean\>  | []      |
| closeMethods | 模态框的关闭方法 | Array\<Function\> | []      |

## Development

```bash
# dev
npm run serve

# build
npm run build:lib
```

## License

[MIT](https://github.com/luoxuhai/vue-native-back/blob/master/LICENSE)
