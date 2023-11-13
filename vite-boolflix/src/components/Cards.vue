<script>
import { store } from '../store'

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            store
        }
    },

    computed: {
        flags() {
            return this.store.flags[item.original_language]
        }
    }
}
</script>

<template>
    <div class="card">
        <ul class="movie-card">
            <li>Title: {{ item.title }}</li>
            <li>Original Title: {{ item.original_title }}</li>
            <li>Language:
                <img height="15" class="flag" v-if="store.flags[item.original_language]"
                    :src="store.flags[item.original_language]" alt="">
                <p v-else>{{ item.original_language }}</p>
            </li>
            <li>Vote: {{ (item.vote_average).toFixed(1) }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.flag {
    border: 0.5px solid black;
}
</style>