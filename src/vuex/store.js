import Vue from "vue";
import Vuex from "vuex";

import commonActions from "./actions/actions";
import requestActions from "./actions/api-request";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = { ...commonActions, ...requestActions };

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
    },

    actions,
    mutations,
    getters,
});

export default store;
