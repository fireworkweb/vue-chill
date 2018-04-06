# vue-chill

Chill down Vue.js data watchers.

Vue.js adds a watcher to each and every attribute you define on your component. To lock down and avoid too much watchers, you can tell Vue to chill down and not watch a few of those attributes.

## Usage

Install with npm/yarn:

```sh
npm install vue-chill

yarn add vue-chill
```

Import on your js file and tell Vue to use it:

```js
const Vue = require('vue');
const VueChill = require('vue-chill');

// or
import Vue from 'vue';
import VueChill from 'vue-chill';

Vue.use(VueChill);
```

Then, on every component you need to chill something, just add a `chill` array with the attributes to unwatch to the root object:

```js
Vue.component('example-component', {
    name: 'ExampleComponent',

    data () {
        return {
            someUnwatchedAttribute: 'example unwatched attribute',
            imStillWatched: 'example watched attribute',
        },
    },

    chill: [ 'someUnwatchedAttribute' ],
});
```

## License

MIT.
