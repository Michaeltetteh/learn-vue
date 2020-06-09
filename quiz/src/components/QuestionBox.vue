<template>
    <div>
        <b-jumbotron>
            <template v-slot:lead>
                {{ CurrentQuestion.question }}
            </template>

            <hr class="my-4">
            <p v-for="(answer, index) in answers" :key="index">
                {{ answer }}
            </p>

            <b-button variant="primary" href="#">Submit</b-button>
            <b-button @click="NextQuestion" variant="success" href="#">Next</b-button>
        </b-jumbotron>
    </div>
</template>


<script>
export default {
    props:{
        CurrentQuestion: Object,
        NextQuestion: Function
    },

    computed: {
        answers(){
            let answers = [...this.CurrentQuestion.incorrect_answers];
            answers.push(this.CurrentQuestion.correct_answer);
            return answers;
        }
    }
}
</script>