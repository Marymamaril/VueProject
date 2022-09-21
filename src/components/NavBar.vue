  <template>
  <br/>
    
    
      
  <v-card
      class="mx-auto"
      max-width="544"
    
      bacground color="#A7C7E7">
      

      

      <nav> 
    
    <v-toolbar>
    <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
    <v-toolbar-title >
      <span class="font-weight-hard">Final Project Quiz</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <span v-if="isLoggedIn"
        >
        <!-- dropdown menu -->
      <v-menu
        open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn
            color="black"
            v-bind="props"
          >
            Menu
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.path" :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
        
      </v-menu>
      <v-btn @click="signOut">Logout</v-btn>
    </span>
    <span v-else>
        
        <v-btn color="black" ><router-link  style="text-decoration: none; color: inherit;" to="/login"> Login </router-link></v-btn>
     
      <v-btn color="black" ><router-link  style="text-decoration: none; color: inherit;" to="/register"> Register </router-link></v-btn>
      </span>
        </v-toolbar>


        
      <v-navigation-drawer app v-model="drawer"
      color="#A7C7E7">
      <span v-if="isLoggedIn"
        >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            router 
            :to="item.path" :prepend-icon="item.icon">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
          </span>
      </v-navigation-drawer>

      
    </nav>
  </v-card>
  </template>

  <script setup>

    import { ref} from 'vue'

import { useRouter } from 'vue-router'
import { getAuth, onAuthStateChanged} from 'firebase/auth'
  const router = useRouter()
  const isLoggedIn = ref(false)

  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    isLoggedIn.value=true;
    // ...
  } else {
    isLoggedIn.value=false;
  }
});

    const drawer = ref(false)

    const  items =  ref([
            { title: 'Home', icon: 'mdi-home', path: '/dashboard' },
            { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/basicMath' },
            { title: 'String App', icon: 'mdi-tooltip-text', path: '/stringApp'},
            { title: 'Vuetify', icon: 'mdi-vuetify', path: '/vuetify'},
            { title: 'Aboutme', icon: 'mdi-account-box', path: '/aboutme'},
            { title: 'Quiz App', icon: 'mdi-glasses', path: '/quizapp'},
            { title: 'About App', icon: 'mdi-account', path: '/aboutapp'},
          ])

  function toggleDrawer(){
    return drawer.value = !drawer.value
  }
  const signOut = () => {
    auth.signOut()
    router.push('/login')
  }
  </script>

  <style scoped>



  </style>
