<template>
    <div class="v-catalog-item">
        <p class="v-catalog-item__title">{{ catalogItemData.name }}</p>
        <div class="v-catalog-item__img">
            <img
                :src="require('../../assets/images/' + catalogItemData.image)"
                alt="img"
            />
        </div>
        <p class="v-catalog-item__price">
            Price:
            <span class="v-catalog-item__price-number">
                {{ catalogItemData.price }}$
            </span>
        </p>
        <button @click="addToCart()" class="v-catalog-item__btn-cart">
            Add to cart
        </button>
    </div>
</template>

<script>
export default {
    name: "v-catalog-item",
    props: {
        catalogItemData: {
            type: Object,
            default() {
                return {};
            },
        },
    },

    mounted() {
        this.$set(this.catalogItemData, "quantity", 1);
    },

    methods: {
        addToCart() {
            this.$emit("addToCart", this.catalogItemData);
        },
    },
};
</script>

<style lang="sass">

.v-catalog-item
    min-height: 460px
    display: flex
    flex-direction: column
    justify-content: space-between
    box-shadow: 0 0 8px 0 #e0e0e0
    border-radius: 5px
    padding: 30px
    transition: 0.2s

    &:hover
        box-shadow: 0 0 20px 0 #999

    &__title
        font-size: 18px
        margin-bottom: 10px

    &__img
        display: flex
        flex-grow: 1
        justify-content: center

        & img
            display: block
            align-self: center
            max-width: 200px
            border-radius: 10px

    &__price
        margin: 10px 0
        font-size: 15px

    &__price-number
        font-weight: 600

    &__btn-cart
        padding: 10px 30px
        font-size: 17px
        font-weight: 500
        outline: none
        border: none
        border-radius: 10px
        color: white
        background-color: $blue
        transition: 0.2s

        &:hover
            background-color: darken($blue, 10%)
</style>
