import axios from "axios"

export default {
    ADD_PRODUCTS_FROM_API({ commit }) {
        axios
            .get("http://localhost:3000/products", { method: "GET" })
            .then((res) => commit("ADD_PRODUCTS_FROM_API", res.data))
            .then(() => commit("MAKE_NORMALIZED_PRICES"));
    },
};
