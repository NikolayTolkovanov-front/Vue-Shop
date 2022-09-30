<template>
    <div class="v-main">
        <h1 class="v-main__title">Vue Shop</h1>
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: "v-main",
    methods: {},

};
</script>

<style lang="sass" scoped>
.v-main
    max-width: 900px
    margin: 0 auto


</style>
