<template>
  <div class="note-count">
      Note count: <strong>{{ noteCount }}</strong>
  </div>
</template>

<script>
import { EventBus } from "../main.js";

export default {
  name: "NoteCountComponent",

  data() {
    return {
      noteCount: 0
    };
  },

//   methods: {
//     setCounter(event) {
//       this.counter = event.counter;
//       console.log(event.counter);
//     }
//   },

  created() {
    EventBus.$on("add-note", () => this.noteCount++);
  }
};
</script>