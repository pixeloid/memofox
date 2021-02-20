import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHjDtaNrYoYva-Bly0qilnBcgNyjHCvJI",
  authDomain: "memofox-videos.firebaseapp.com",
  projectId: "memofox-videos",
  storageBucket: "memofox-videos.appspot.com",
  messagingSenderId: "756750865137",
  appId: "1:756750865137:web:b47f90eb416c7ed0bfcf50",
  measurementId: "G-B471CLNJMD"
};

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(user => {
  if(!app) {
    app = createApp(App).use(router).mount('#app')
  }
})
