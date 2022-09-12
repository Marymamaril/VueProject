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
    <span class="font-weight-hard">Midterm Project</span>
  </v-toolbar-title>
  <v-spacer></v-spacer>

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
      </v-toolbar>


      
    <v-navigation-drawer app v-model="drawer"
    color="#A7C7E7">
    
      <v-list-item
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
    </v-navigation-drawer>

    
  </nav>
</v-card>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
          { title: 'Home', icon: 'mdi-home', path: '/dashboard' },
          { title: 'Calculator', icon: 'mdi-calculator-variant', path: '/basicMath' },
          { title: 'String App', icon: 'mdi-help-box', path: '/stringApp'},
          { title: 'Vuetify', icon: 'mdi-vuetify', path: '/vuetify'},
          { title: 'Aboutme', icon: 'mdi-account-box', path: '/aboutme'},
          { title: 'AxiosDemo', icon: 'mdi-account-box', path: '/axiosdemo'},
          { title: 'About App', icon: 'mdi-account-box', path: '/aboutapp'},
        ])

function toggleDrawer(){
  return drawer.value = !drawer.value
}

</script>

<style scoped>




</style>
