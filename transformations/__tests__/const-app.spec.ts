import { defineInlineTest } from 'jscodeshift/src/testUtils'

const transform = require('../const-app')


defineInlineTest(
  transform,
  {},
  `import * as Vue from "vue";
  Vue.createApp(App).use(button_counter).use(router).use(store).mount("#app");
Vue.directive('demo', {})
Vue.component('myComponent',{})
`,
  `import * as Vue from "vue";
const app = Vue.createApp(App).use(button_counter).use(router).use(store);
app.mount("#app");
app.directive('demo', {})
app.component('myComponent',{})`,
  'add const app and transform Vue to app in main.js'
)

defineInlineTest(
  transform,
  {},
  `import * as Vue from "vue";
  const app = Vue.createApp(App).use(button_counter).use(router).use(store);
Vue.directive('demo', {})
Vue.component('myComponent',{})
app.mount("#app");`,
  `import * as Vue from "vue";
  const app = Vue.createApp(App).use(button_counter).use(router).use(store);
app.directive('demo', {})
app.component('myComponent',{})
app.mount("#app");`,
  'do not add const app when app.mount() is already exist '
)

defineInlineTest(
  transform,
  {},
  `import test from 'test'
  Vue.prototype.shareConfig = shareConfig
  Vue.createApp(App).mount("#app")`,
  `import test from 'test'
Vue.prototype.shareConfig = shareConfig
const app = Vue.createApp(App);
app.mount("#app");`,

  'do not add const app when app.mount() is already exist '
)
