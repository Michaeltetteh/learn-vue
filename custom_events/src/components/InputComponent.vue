<template>
    <div>
        <input class="input is-small" type="text" 
        :placeholder="placeholder"
        v-model="input"
        @keyup.enter="monitorEnterKey" />
    </div>
</template>

<script>
import { EventBus } from "../main.js";

export default {
    name: "InputComponent",

    props: ["placeholder"],

    data () {
        return {
            input: ''
            // counter: 0
        }
    },

    methods: {
        monitorEnterKey () {
            EventBus.$emit('add-note',{
                note: this.input,
                timestamp: new Date().toLocaleString()
            });

            // EventBus.$emit('note-counter',{
            //     counter: this.counter++
            // });

            this.input = '';
        }
    }
}
</script>