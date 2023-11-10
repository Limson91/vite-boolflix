<script>
import { store } from '../store'

export default {
    data() {
        return {
            store: store,
        }
    },

    methods: {
        searchCall() {
            this.$emit('doSearch')
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="searchbar">
            <input type="text" v-model="store.searchString">
            <button @click="searchCall">Search!</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.searchbar {
    display: flex;
}
</style>