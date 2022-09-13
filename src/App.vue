<template>
   <v-app>
      
   <v-main>
      <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
      <Navbar/>
      <router-view></router-view>
      </v-parallax>
   </v-main>

   </v-app>
</template>

<script setup>
import Navbar from '@/components/NavBar.vue';
</script>
