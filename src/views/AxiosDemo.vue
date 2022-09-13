<template>
<div :style="{'background-image':'url(myth.jpg)'}" class="image">
  
  <quiz @quiz-completed="handleQuizCompleted" :key="quizKey" />
  <custom-modal
    v-show="showModal"
    header="Congratulations!"
    subheader="You've completed your Quiz!"
    :score="score"
    @reload="updateQuiz"
    @close="showModal = false"
  />
  <br>
  <br> <br> <br>
</div>
</template>

<script>
import CustomModal from "../components/CustomModal.vue";
import Quiz from "../components/Quiz.vue";

export default {
components: { Quiz, CustomModal },

data() {
  return {
    quizKey: 0,
    showModal: false,
    score: {
      allQuestions: 0,
      answeredQuestions: 0,
      correctlyAnsweredQuestions: 0,
    },
  };
},
methods: {
  handleQuizCompleted(score) {
    this.score = score;
    this.showModal = true;
  },
  updateQuiz() {
    this.showModal = false;
    this.quizKey++;
  },
},
};
</script>

<style>
* {
box-sizing: border-box;
}
.image
{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
