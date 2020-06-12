const state = {
    notes: [],
    timestamps: []
}

const mutations = {
    ADD_NOTE (state, payload) {
        let newNote = payload;
        state.notes.push(newNote);
    },

    ADD_TIMESTAMP (state, payload) {
        let newTimestamp = payload;
        state.timestamps.push(newTimestamp);
    }
}

const actions = {
    addNote (context, payload) {
        context.commit('ADD_NOTE', payload);
    },

    addTimestamp (context, payload) {
        context.commit('ADD_TIMESTAMP', payload);
    }
}

const getters = {
    // getNotes (state) {
    //     return state.notes;
    // },

    // getTimestamps (state) {
    //     return state.timestamps;
    // },

    // getNoteCount (state) {
    //     return state.notes.length;
    // }
    //ES6 => function
    getNotes: state => state.notes,
    getTimestamps: state => state.timestamps,
    getNoteCount: state => state.notes.length
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

const inputComponent = {
    template: 
    `
    <input placeholder="Enter a note"
        v-model="input"
        @keyup.enter="monitorEnterKey"
        class="input is-small" text="text" />
    `,
    data() {
        return {
            input: ''
        }
    },
    methods: {
        monitorEnterKey() {
            store.dispatch('addNote', this.input);
            store.dispatch('addTimestamp', new Date().toLocaleString());
            this.input = '';
        }
    }
}

const noteCountComponent = {
    template:
    `<div class="note-count">
        Note count: <strong> {{ noteCount }}</strong>
    </div>
    `,
    computed: {
        noteCount() {
            return this.$store.getters.getNoteCount;
        }
    }
}

new Vue({
    el:'#app',
    store,
    components: {
        'input-component': inputComponent,
        'note-count-component': noteCountComponent
    },
    computed: {
        notes() {
            return this.$store.getters.getNotes;
        },
        timestamps() {
            return this.$store.getters.getTimestamps;
        }
    }
})

