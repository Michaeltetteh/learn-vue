const InputForm = {
    template: `
    <div class="input-form">
        <form @submit="submitForm" class="ui form">
            <div class="field">
                <input v-model="newInput" type="text" placeholder="Add an item!">
            </div> 
            <button class="ui button">Submit</button>
         </form> 
         <div class="ui segment">
            <h4 class="ui header">Items</h4>
            <ul>
                <li v-for="item in items" class="item"> {{ item }} </li>
            </ul>
         </div>
    </div>
    `,

    data() {
        return {
            newInput: '',
            items: []
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

