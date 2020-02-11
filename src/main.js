import Vue from 'vue';
import App from './App.vue';

import wysiwyg from "./editor";
Vue.use(wysiwyg, {
  hideModules: {
    bold: false
  },
  forcePlainTextOnPaste: false,
    forceHtmlOnPaste: true,
    htmlSanitizeOptions: {
        allowedTags: [ 'p', 'b', 'i', 'em', 'strong', 'a', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ],
        allowedAttributes: {
            'a': [ 'href' ]
        },
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
