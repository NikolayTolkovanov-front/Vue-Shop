<template>
    <div class="v-cart">
        <h2 class="v-card__title component-title">Cart</h2>
        <p v-if="!cartData.length" class="v-cart__no-products">
            There`s no products in cart...
        </p>
        <router-link :to="{ name: 'catalog' }">
            <div class="v-cart__to-catalog cart-link">to catalog</div>
        </router-link>
        <ul class="v-cart__list">
            <v-cart-item
                v-for="(product, index) in cartData"
                :key="product.article"
                :cartItemData="product"
                @removeProcuctFromCart="removeProcuctFromCart(index)"
                @plusProduct="plusProduct(index)"
                @minusProduct="minusProduct(index)"
            />
        </ul>
        <div class="v-cart__total">Total: {{ total }} P.</div>
    </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapActions } from "vuex";

export default {
    name: "v-cart",
    components: { vCartItem },

    props: {
        cartData: {
            type: Array,
            default() {
                return [];
            },
        },
    },

    data() {
        return {};
    },

    methods: {
        ...mapActions([
            "REMOVE_PRODUCT_FROM_CART",
            "PLUS_PRODUCT",
            "MINUS_PRODUCT",
        ]),

        removeProcuctFromCart(index) {
            this.REMOVE_PRODUCT_FROM_CART(index);
        },

        plusProduct(index) {
            this.PLUS_PRODUCT(index);
        },

        minusProduct(index) {
            this.MINUS_PRODUCT(index);
        },
    },

    computed: {
        total() {
            if (!this.cartData.length) {
                return 0;
            }

            let arr = []

            for (let product of this.cartData) {
                arr.push(product.price * product.quantity)
            }

            return arr.reduce((prev, next) => prev + next)
        },
    },
};
</script>

<style lang="sass">
.v-cart
    position: relative
    padding-bottom: 100px

    &__to-catalog
        padding: 10px
        background-color: $blue
        border-radius: 10px
        color: $white

        &:hover
            background-color: darken($blue, 5%)

    &__total
        padding: 30px
        position: fixed
        bottom: 0
        left: 0
        right: 0
        background-color: $green
        font-size: 20px
        font-weight: 700
        color: $white


    &__list
        display: flex
        flex-direction: column
</style>
