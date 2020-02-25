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
        allowedTags: [ '' ],
        allowedAttributes: {
            'a': [ 'href' ]
        },
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
