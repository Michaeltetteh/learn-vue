const ButtonRow = {
    template:
    `
    <div>
        <button @click="onHoodieClick" class="ui button" 
            name="Hoodie Btn" value="Hoodie">Hoodie</button>
        <button @click="onTeeClick" class="ui button"
            name="Tee Btn" value="Tee">Tee</button>
        <button @click="onFittedCapClick" class="ui button"
            name="FittedCap Btn" value="FittedCap">Fitted Cap</button>
        <button @click="onJacketClick" class="ui button"
            name="Jacket btn"
            value="Jacket">Jacket</button>
    </div>
    `,
    methods: {
        onHoodieClick(evt) {
            const button = evt.target;
            console.log(`hoodie btn clicked ${button.name}: ${button.value}`);
        },
        onTeeClick(evt) {
            const button = evt.target;
            console.log(`Tee btn clicked ${button.name} : ${button.value}`);
        },
        onFittedCapClick(evt) {
            const button = evt.target;
            console.log(`Fitted Cap btn clicked ${button.name} : ${button.value}`);
        },
        onJacketClick(evt) {
            const button = evt.target;
            console.log(`Jacket btn clicked ${button.name} : ${button.value}`);
        }
    }
}


new Vue({
    el: "#app",
    components: {
        'button-row': ButtonRow 
    }
})