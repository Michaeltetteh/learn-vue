const InputForm = {
    template: `
    <div class="input-form">
        <form @submit="submitForm" class="ui form">
            <div class="field">
                <input v-model="newInput" type="text" placeholder="Add an item!">
            </div> 
            <button class="ui button">Submit</button>
         </form> 
    </div>
    `,

    data() {
        return {
            newInput: ''
        }
    },
    
    methods: {
        submitForm(evt) {
            evt.preventDefault();
            console.log(this.newInput)
        }
    }
    
}

new Vue({
    el: "#app",
    components: {
        'input-form': InputForm
    }
})

