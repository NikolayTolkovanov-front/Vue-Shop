export default {
    MAKE_NORMALIZED_PRICES({ commit }) {
        commit("MAKE_NORMALIZED_PRICES");
    },

    ADD_TO_CART({ commit }, productToAdd) {
        commit("ADD_TO_CART", productToAdd);
    },

    REMOVE_PRODUCT_FROM_CART({ commit }, index) {
        commit("REMOVE_PRODUCT_FROM_CART", index);
    },

    PLUS_PRODUCT({ commit }, index) {
        commit("PLUS_PRODUCT", index);
    },

    MINUS_PRODUCT({ commit }, index) {
        commit("MINUS_PRODUCT", index);
    },
};
