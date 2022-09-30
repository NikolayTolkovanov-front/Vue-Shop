<template>
    <div class="v-cart-item">
        <div class="v-cart-item__img">
            <img
                :src="require('../../assets/images/' + cartItemData.image)"
                alt="img"
            />
        </div>
        <div class="v-cart-item__content">
            <ul class="v-cart-item__list">
                <li class="v-cart-item__list-item v-cart-item__list-name">
                    name: {{ cartItemData.name }}
                </li>
                <li class="v-cart-item__list-item v-cart-item__list-available">
                    available: {{ cartItemData.available ? "yes" : "no" }}
                </li>
                <li class="v-cart-item__list-item v-cart-item__list-category">
                    category: {{ cartItemData.category }}
                </li>
            </ul>
            <div class="v-cart-item__shopping-block">
                <div class="v-cart-item__numbers">
                    <p class="v-cart-item__price">
                        Price:
                        <span class="v-cart-item__price-number">
                            {{ normalizedPrice }}
                        </span>
                    </p>
                    <div class="v-cart-item__quantity">
                        <button
                            @click="minusProduct()"
                            class="v-cart-item__btn-minus"
                        >
                            -
                        </button>
                        <span class="v-cart-item__quantity-value">{{
                            cartItemData.quantity
                        }}</span>
                        <button
                            @click="plusProduct()"
                            class="v-cart-item__btn-plus"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div class="v-cart-item__buttons">
                    <button class="v-cart-item__btn-buy btn-cart">Buy</button>
                    <button
                        @click="deleteProductFromCart()"
                        class="v-cart-item__btn-delete btn-cart"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "v-cart-item",

    props: {
        cartItemData: {
            type: Object,
            default() {
                return {};
            },
        },
    },

    methods: {
        ...mapActions(["PLUS_PRODUCT", "MINUS_PRODUCT"]),

        deleteProductFromCart() {
            this.$emit("removeProcuctFromCart");
        },

        plusProduct() {
            this.$emit("plusProduct");
        },

        minusProduct() {
            this.$emit("minusProduct");
        },
    },

    computed: {
        normalizedPrice() {
            return this.cartItemData.price.toFixed(0);
        },
    },
};
</script>

<style lang="sass">

.v-cart-item
    margin-bottom: 20px
    display: flex
    padding: 30px
    border-radius: 10px
    box-shadow: 0 0 15px 0 #e0e0e0

    &__img
        max-width: 150px

        & img
            border-radius: 10px

    &__content
        display: flex
        flex-grow: 1
        justify-content: space-around
        text-align: left

    &__list
        display: flex
        flex-direction: column

    &__list-item
        font-size: 18px

        &:not(:last-child)
            margin-bottom: 15px

    &__shopping-block
        display: flex
        flex-direction: column
        align-items: flex-end

    &__numbers
        margin-bottom: 20px
        display: flex
        align-items: center

    &__price
        font-size: 20px
        padding-right: 15px

    &__price-number
        font-weight: 600

    &__quantity
        display: flex
        justify-content: space-between
        flex-grow: 1
        align-items: center
        border: 2px solid #eff3f6
        border-radius: 5px

    &__btn-minus, &__btn-plus
        @include btn-none()
        padding: 10px 20px
        font-size: 20px
        font-weight: 700
        background-color: #eff3f6
        color: $blue
        transition: 0.15s

        &:hover
            background-color: darken(#eff3f6, 5%)

    &__quantity-value
        padding: 0 20px
        font-weight: 600

    &__buttons
        display: flex
        flex-direction: column

    .btn-cart
        @include btn-none
        max-width: 230px
        border-radius: 8px
        padding: 10px 53px
        transition: 0.15s

    &__btn-buy
        @include btn-none
        background-color: $blue
        color: white

        &:hover
            background-color: darken($blue, 5%)

    &__btn-delete
        margin-top: 10px
        background-color: $red
        color: white

        &:hover
            background-color: darken($red, 5%)
</style>
