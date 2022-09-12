<template>
     <br/> <br/>
     <div>
     
     <v-card
     class="mx-auto"
     max-width="544"
  
     bacground color="#A7C7E7"
     >
     <v-card-title> String Manipulation </v-card-title>
     <v-text-field label="Enter a String" v-model="stringInput"></v-text-field>
    

     <v-btn class="mx-2" color="primary" elevation="2" outlined sqaure @click="compute" >Enter</v-btn>

   
     
     <v-card-title>Results:</v-card-title>
     <p>The number of Vowel: {{vowels}}</p>
     <p>Number: {{numbers}}</p>
     <p>The number of Consonant: {{consonant}}</p>
     <p>Convert Vowels to * : {{convert}}</p>
     </v-card>  
     
     </div>
     </template>
     
     <script setup>
     import {ref} from 'vue'
     
     const stringInput = ref('')
     const vowels = ref('')
     const numbers = ref('')
     const consonant = ref('')
     const convert = ref('')
     
     function compute() {
          vowels.value = stringInput.value.match(/[aeiou]/gi).length;
          numbers.value = stringInput.value.match(/[0-9]/gi).length;
          consonant.value = stringInput.value.match(/[bcdfghjklmnpqrstvwxys]/gi).length;
          convert.value = stringInput.value.replace(/[aeiou]/gi, '*');
          return value; 
     }
     
     
     
     </script>
     
     <style scoped>
     
     
     p{
          text-align: center;
     }
     </style>