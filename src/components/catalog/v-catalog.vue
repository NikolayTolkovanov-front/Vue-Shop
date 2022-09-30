<template>
    <div class="v-catalog">
        <h2 class="v-catalog__title component-title">Catalog</h2>
        <router-link :to="{ name: 'cart', params: { cartData: CART } }">
            <div class="v-catalog__to-cart cart-link">
                cart:
                <span class="v-catalog__cart-number cart-link__number">{{
                    CART.length
                }}</span>
            </div>
        </router-link>
        <ul class="v-catalog__list">
            <v-catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                :catalogItemData="product"
                @addToCart="addToCart"
            />
        </ul>
    </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "v-catalog",
    components: {
        vCatalogItem,
    },

    data() {
        return {};
    },

    mounted() {
        this.ADD_PRODUCTS_FROM_API()
    },

    methods: {
        ...mapActions([
            "ADD_PRODUCTS_FROM_API",
            "MAKE_NORMALIZED_PRICES",
            "ADD_TO_CART",
        ]),

        addToCart(productToAdd) {
            this.ADD_TO_CART(productToAdd);
        },
    },

    computed: {
        ...mapGetters(["CART", "PRODUCTS", "AVALIABLE_PRODUCTS"]),
    },
};
</script>

<style lang="sass">

.v-catalog
    position: relative

    &__to-cart
        color: $black

        &:hover
            color: $blue

    &__list
        margin-top: 40px
        margin-bottom: 30px
        display: grid
        grid-template-columns: repeat(3, auto)
        gap: 30px
        flex-wrap: wrap
</style>
