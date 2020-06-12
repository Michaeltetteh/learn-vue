<template>
  <div id="app">
    <div class="notes-section">
      <div class="columns">
        <div class="column has-text-centered">
          <strong>Notes</strong>
          <div v-for="note in notes" class="notes" :key="note">
            {{ note }}
          </div>
        </div>
        <div class="column has-text-centered">
          <strong>Timestamp</strong>
          <div v-for="timestamp in timestamps" class="timestamps" :key="timestamp">
            {{ timestamp }}
          </div>
        </div>
      </div>
      <InputComponent 
        :placeholder="placeholder"
        @add-note="addNote" >
      </InputComponent>
    </div>
  </div>
</template>

<script>
import InputComponent from "./components/InputComponent.vue";

export default {
  name: "App",

  components: {
    InputComponent
  },

  data () {
    return {
      notes: [],
      timestamps: [],
      placeholder: "Enter a note"
    }
  },

  methods: {
    addNote (event) {
      this.notes.push(event.note);
      this.timestamps.push(event.timestamp);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
