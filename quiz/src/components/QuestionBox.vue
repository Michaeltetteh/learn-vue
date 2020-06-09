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
                         v-for="(answer, index) in shuffledAnswers" 
                         :key="index"
                         @click="selectAnswer(index)"
                         :class="answerClass(index)">
                         
                         {{ answer }}
                         
                         </b-list-group-item>
                    </b-list-group>
                </div>
                <div>
                    <b-button variant="primary"
                    @click="submitAnswer"
                    :disabled="selectedIndex === null || answered"
                    >
                        Submit
                    </b-button>
                    <b-button @click="NextQuestion" variant="success">Next</b-button>
                </div>
            
        </b-jumbotron>
    </div>
</template>


<script>
import _ from 'lodash'

export default {
    props:{
        currentQuestion: Object,
        NextQuestion: Function,
        increament: Function
    },

    data(){
        return{
            selectedIndex: null,
            shuffledAnswers: [],
            correctIndex: null,
            answered: false
        }
    },

    watch:{
        currentQuestion:{
            immediate: true,
            handler(){
                this.selectedIndex = null,
                this.answered = false,
                this.shuffleAnswer()
            }
        }
    },

    computed: {
        answers(){
            let answers = [...this.currentQuestion.incorrect_answers];
            answers.push(this.currentQuestion.correct_answer);
            // console.log(answers)
            return answers;
        }
    },

    // mounted(){
    //     console.log(this.currentQuestion);
    // },

    methods:{
        selectAnswer(index){
            this.selectedIndex = index;
            // console.log(this.selectedIndex);
        },
        shuffleAnswer(){
            let answers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
            this.shuffledAnswers = _.shuffle(answers)
            this.correctIndex = this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer);
        },
        submitAnswer(){
            let isCorrect = false;
            if(this.selectedIndex === this.correctIndex){
                isCorrect = true;
            }
            this.answered = true;
            this.increament(isCorrect);
        },
        answerClass(index){
            let answerClass = '';

            if(!this.answered && this.selectedIndex === index){
                answerClass = 'selected';
            }else if(this.correctIndex === index && this.answered){
                answerClass = 'correct';
            }else if(this.selectedIndex === index && this.correctIndex !== index && this.answered){
                answerClass = 'incorrect';
            }

            return answerClass;
        }
    }
}
</script>

<style scoped>
.list-group{
    margin-bottom: 15px;
}

.list-group-item:hover{
    background-color: azure;
    cursor: pointer;
}
.btn{
    margin: 0 5px;
}

.selected{
    background-color: aqua;
}

.correct{
    background-color: lightgreen;
}

.incorrect{
    background-color: red;
}

</style>