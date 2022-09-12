<template>
<br/>
<v-card
class="mx-auto"
max-width="600"
background color="#A7C7E7">



<v-card-title>Questions and Answer</v-card-title>


 
        <v-btn class="mx-2" color="primary" @click="getQuestions">Show</v-btn><br/>
        
        <v-list-item
                v-for="question in questions"
                :key="question.id"
                >
                <v-list-item>{{ question.question }}</v-list-item>
                <v-list-item>
                    {{question.correct_answer}}
                </v-list-item>
        </v-list-item>
</v-card>
        </template>
        
        <script setup>
            import { ref } from 'vue';
            import axios from 'axios'
        
            const questions=ref([])
        
            async function getQuestions () {
                axios.get('https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple').then( response => {
                    questions.value=(response.data.results)
                })
                
            }
        
        </script>
        
        <style>
    
            .card {
                border: 1px solid white;
                transition: 0.3s;
                width: 80%;
               
            }
            
            .card:hover {
                box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
            }
            
            .container {
                padding: 2px 16px;
            }
            
            
            
            
            </style>



