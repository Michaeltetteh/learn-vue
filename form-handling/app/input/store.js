const state = {
    fields: {
        newItem: '',
        email: '',
        urgency: '',
        termsAndConditions: false
    },
    items: []
}

const mutations = {
    UPDATE_NEW_ITEM(state, payload) {
        state.fields.newItem = payload;
    },
    UPDATE_EMAIL(state, payload) {
        state.fields.email = payload;
    },
    UPDATE_URGENCY(state, payload) {
        state.fields.urgency = payload;
    },
    UPDATE_TERMS_AND_CONDITIONS(state, payload) {
        state.fields.termsAndConditions = payload;0
    },
    UPDATE_ITEMS(state, payload) {
        state.items = payload;
    },
    CLEAR_FIELDS(){
        state.fields.newItem = '';
        state.fields.email = '';
        state.fields.urgency = '';
        state.fields.termsAndConditions = false;
    }
}

const actions = {}

const getters = {
    newItem: state => state.fields.newItem,
    email: state => state.fields.email,
    urgency: state => state.fields.urgency,
    newItemLength: state => state.fields.newItem.length,
    isNewItemInputLimitExceeded: state => state.fields.newItem.length >= 20,
    isNotUrgent: state => state.fields.urgency === "Nonessential",
    termsAndConditions: state => state.fields.termsAndConditions,
    items: state => state.items
}

window.store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

let apiClient = {
    loadItems: function () {
        return {
            then: function (cb) {
                setTimeout(() => {
                    cb(JSON.parse(localStorage.items || '[]'));
                }, 1000);
            },
        };
    },

    saveItems: function (items) {
        const success = !!(this.count++ % 2);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!success) return reject({
                    success
                });
                localStorage.items = JSON.stringify(items);
                return resolve({
                    success
                });
            }, 1000);
        });
    },

    count: 1,
}