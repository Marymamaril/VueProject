<template>
  <br/> <br/>
    <div>
    <v-card
    class="mx-auto"
    max-width="544"
    background color="#A7C7E7">
      <v-card-title> Simple Calculator </v-card-title>
      <v-text-field label="Enter First Number" v-model.number="fNumber"></v-text-field>
      <v-text-field label="Enter Second Number" v-model.number="sNumber"></v-text-field>
      <v-btn class="mx-2" color="primary" elevation="2" outlined rounded @click="compute"> Enter </v-btn>
      <v-btn class="mx-4" color="primary" elevation="2" outlined rounded @click="resetInput"> Clear </v-btn>
      <v-card-title>Results:</v-card-title>
        <p> Sum: {{sum}} </p>
        <p> Difference: {{difference}} </p>
        <p> Product: {{product}} </p>
        <p> Quotient: {{quotient}} </p>
        <p> Average: {{average}} </p>
    </v-card>
    </div>
    </template>
    
    <script setup>
    import {ref} from 'vue'
    
      const fNumber=ref(0)
      const sNumber=ref(0)
      const sum=ref(0)
      const difference=ref(0)
      const product=ref(0)
      const quotient=ref(0)
      const average=ref(0)
    
      function compute(){
        sum.value = fNumber.value + sNumber.value
        difference.value = fNumber.value - sNumber.value
        product.value = fNumber.value * sNumber.value
        quotient.value = fNumber.value / sNumber.value
        average.value = (fNumber.value * sNumber.value)/2
        return value
      }
    
      function resetInput(){
        fNumber.value =""
        sNumber.value =""
        sum.value =""
        difference.value =""
        product.value =""
        quotient.value =""
        average.value =""
      }
      
    </script>
    
    <style scoped>
    p{
      font-family: 'Times New Roman', Times, serif;
      font-size: large;
      text-align: center;
    }
    
    </style>