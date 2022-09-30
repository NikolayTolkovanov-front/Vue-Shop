export default {
    ADD_PRODUCTS_FROM_API(state, products) {
        state.products = products;
    },

    MAKE_NORMALIZED_PRICES(state) {
        if (!state.products) {
            console.log("no products");
        }
        for (let product of state.products) {
            product.price = Math.floor(product.price);
        }
    },

    ADD_TO_CART(state, productToAdd) {
        for (let product of state.cart) {
            if (product === productToAdd) {
                product.quantity += 1;
                return;
            }
        }

        state.cart = [...state.cart, productToAdd];
    },

    REMOVE_PRODUCT_FROM_CART(state, index) {
        state.cart.splice(index, 1);
    },

    PLUS_PRODUCT(state, index) {
        state.cart[index].quantity += 1;
    },

    MINUS_PRODUCT(state, index) {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity -= 1;
        }
    },
};
