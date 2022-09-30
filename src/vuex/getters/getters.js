export default {
    PRODUCTS(state) {
        return state.products;
    },

    AVALIABLE_PRODUCTS(state, getters) {
        return getters.products;
        // return getters.products.filter((item) => item.available);
    },

    CART(state) {
        return state.cart;
    },
};
