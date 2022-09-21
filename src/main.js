import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlVl6_C2Mrf8IjSXu6S2yTYoEVO8VXYMA",
  authDomain: "vuelogin-e5da1.firebaseapp.com",
  databaseURL: "https://vuelogin-e5da1-default-rtdb.firebaseio.com",
  projectId: "vuelogin-e5da1",
  storageBucket: "vuelogin-e5da1.appspot.com",
  messagingSenderId: "286028862865",
  appId: "1:286028862865:web:bd04addf5bfb0384d53630"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export { auth }
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
