<script>
import { store } from '../store'

export default {
    props: {
        movie: Object,
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
        <ul class="card-info">
            <li class="card-title">Title: {{ movie.title }}</li>
            <li>Original Title: {{ movie.original_title }}</li>
            <li class="language">Language:
                <img height="15" class="flag" v-if="store.flags[movie.original_language]"
                    :src="store.flags[movie.original_language]" alt="">
                <p v-else>{{ movie.original_language }}</p>
            </li>
            <li>Vote: {{ (movie.vote_average).toFixed(1) }}</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.flag {
    border: 0.5px solid black;
}
</style>