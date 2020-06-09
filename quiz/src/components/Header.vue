<template>
    <div>
        <b-nav tabs>
            <b-nav-item disabled><b>Quiz App</b></b-nav-item>
            <b-nav-item disabled>Counter: {{ numCorrect }}/{{ totalAnswered}}</b-nav-item>
        </b-nav>
    </div>    
</template>

<script>
export default {
    props:[
        'numCorrect',
        'totalAnswered'
    ]
}
</script>