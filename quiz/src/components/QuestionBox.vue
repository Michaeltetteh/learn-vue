<template>
    <div>
        <b-jumbotron>
            <template v-slot:lead>
                {{ currentQuestion.question }}
            </template>

            <hr class="my-4">
                <div>
                    <b-list-group>
                        <b-list-group-item
                         v-for="(answer, index) in answers" 
                         :key="index">
                         
                         {{ answer }}
                         
                         </b-list-group-item>
                    </b-list-group>

                    <b-button variant="primary" href="#">Submit</b-button>
                    <b-button @click="NextQuestion" variant="success" href="#">Next</b-button>
                </div>
        </b-jumbotron>
    </div>
</template>


<script>
export default {
    props:{
        currentQuestion: Object,
        NextQuestion: Function
    },

    computed: {
        answers(){
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            // console.log(answers)
            return answers;
        }
    },

    mounted(){
        console.log(this.currentQuestion);
    }
}
</script>