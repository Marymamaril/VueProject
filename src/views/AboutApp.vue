
<template>
 <br/><br/> 


<v-card


class="mx-auto"
max-width="500"
background color="#A7C7E7"
>

    <div id="pos">


        <center>
            

            <v-btn text @click.stop="dialog= true" class color="primary" elevation="2">About Me</v-btn>
      


        <v-dialog v-model="dialog" max-width="600px">
            <v-card>

                <v-img
        contain
        max-height="200"
        min-height="400"
      
        
        src="/about.jpg"
      ></v-img>
              
                <v-card-title>
                    <h2>About Me</h2>
                </v-card-title>
                
                <v-card-text>
                    It displays the information about the Developer
                </v-card-text>
            </v-card>
        </v-dialog><br/><br/> 
        <v-btn text @click.stop="dialog2 = true" class color="primary" elevation="2">Simple Calculator</v-btn>

<v-dialog v-model="dialog2" max-width="600px">
    <v-card>


        <v-img
        contain
        max-height="200"
        min-height="400"
      
        
        src="/Calcu.jpg"
      ></v-img>

        <v-card-title>
            <h2>Simple Calculator</h2>

        </v-card-title>
        <v-card-text>
            A simple calculator that will dipslay the sum, difference,product, quotient and the average.
        </v-card-text>
    </v-card>
</v-dialog><br/><br/> 

<v-btn text @click.stop="dialog3 = true" class color="primary" elevation="2">String App</v-btn>

        <v-dialog v-model="dialog3" max-width="600px">
            <v-card>

                <v-img
        contain
        max-height="200"
        min-height="400"
      
        
        src="/STR.jpg"
      ></v-img>
                <v-card-title>
                    <h2>String App</h2>
                </v-card-title>
                <v-card-text>
                    It displays the number of vowels the number the consonat and lastly for the converted vowels
                </v-card-text>
            </v-card>
        </v-dialog><br/><br/> 

        <v-btn text @click.stop="dialog4 = true" class color="primary" elevation="2">Vuetify</v-btn>

        <v-dialog v-model="dialog4" max-width="600px">
            <v-card>

                <v-img
        contain
        max-height="200"
        min-height="400"
      
        
        src="/vuetify.jpg"
      ></v-img>
                <v-card-title>
                    <h2>Vuetify</h2>
                </v-card-title>
                <v-card-text>
                    It displays information details about Vuetify
                </v-card-text>
            </v-card>
        </v-dialog><br/><br/> 

        <v-btn text @click.stop="dialog5 = true" class color="primary" elevation="2">Vue Quiz</v-btn>

        <v-dialog v-model="dialog5" width="599px">
           
            <v-card>
                
                <v-img
        contain
        max-height="300"
        min-height ="200"
      
        
        src="/Quiz.jpg"
      ></v-img>
                <v-card-title>
                    <h2>Vue Quiz</h2>
                </v-card-title>
                <v-card-text>
                    A simple quiz about Mythology
                </v-card-text>

            </v-card>

        </v-dialog><br/><br/> 
    </center>
         
    </div>
</v-card>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            dialog5: false,
        }
    }
}
</script>
<style scoped>
#pos{
    margin-top: 30px;

}
</style>
