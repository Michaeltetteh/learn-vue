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
        }
    },

    methods: {
        monitorEnterKey () {
            EventBus.$emit('add-note',{
                note: this.input,
                timestamp: new Date().toLocaleString()
            });
            this.input = '';
        }
    }
}
</script>