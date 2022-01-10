import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/stylesheets/bootstrapModified.css'
import './assets/stylesheets/ownSheet.css'
import 'jquery/src/jquery.js'
import './registerServiceWorker'

import * as firebase from 'firebase/app'
import * as fbAuth from 'firebase/auth'


self.addEventListener('fetch', function (event) {
  event.respondWith(async function () {
      try {
          var res = await fetch(event.request);
          var cache = await caches.open('cache');
          cache.put(event.request.url, res.clone());
          return res;
      } catch (error) {
          return caches.match(event.request);
      }
  }());
});


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAkubvPggOQrsikk7COROW-oDVe_qh1BrQ",
  authDomain: "uno-authentification.firebaseapp.com",
  projectId: "uno-authentification",
  storageBucket: "uno-authentification.appspot.com",
  messagingSenderId: "722319872117",
  appId: "1:722319872117:web:28340e3b271e170c24e83c"
};


firebase.initializeApp(firebaseConfig);
export const firebaseAuth = fbAuth

firebaseAuth.getAuth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
