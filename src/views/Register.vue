<template>
      <br/>
    <br/>  <br/>
    <div>
        <center>
        <v-card 
        max-width="500">
        <center><h1>Register new acc</h1></center>
  <p><input type="text" class="form-control" placeholder="Email" v-model="email" /></p>
  <p><input type="password" class="form-control" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button class="btn btn-primary" @click="register">Login</button></p>
</v-card>
</center>
     </div>
 
 </template>
 
 
 <script setup>
 import {ref} from "vue";
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
 import { useRouter } from 'vue-router'
 
 const email = ref("");
 const password = ref("");
 const router = useRouter()
 const register = () => {
     createUserWithEmailAndPassword(getAuth(), email.value, password.value)
     .then((data) => {
         console.log("Successfully Registered!");
         router.push('/')
     })
     .catch((error) => {
         console.log(error.code);
         alert(error.message);
     })
 };
 
 </script>
 
 <style>
 
 </style>