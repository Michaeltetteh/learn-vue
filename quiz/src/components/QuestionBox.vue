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
                         :key="index"
                         @click="selectAnswer(index)"
                         :class="[selectedIndex === index ? 'selected' : '']">
                         
                         {{ answer }}
                         
                         </b-list-group-item>
                    </b-list-group>
                </div>
                <div>
                    <b-button variant="primary" href="#">Submit</b-button>
                    <b-button @click="NextQuestion" variant="success" href="#">Next</b-button>
                </div>
            
        </b-jumbotron>
    </div>
</template>


<script>
import _ from 'lodash'

export default {
    props:{
        currentQuestion: Object,
        NextQuestion: Function
    },

    data(){
        return{
            selectedIndex: null,
            shuffledAnswers: []
        }
    },

    watch:{
        currentQuestion:{
            immediate: true,
            handler(){
                this.selectedIndex = null,
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
    background-color: lightcoral;
}

</style>