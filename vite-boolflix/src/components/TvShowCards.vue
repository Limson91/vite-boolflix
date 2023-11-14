<script>
import { store } from '../store';

export default {
    data() {
        return {
            store: store,
            stars: [['far', 'star'], ['fas', 'star']]
        }
    },

    props: {
        show: Object
    },

    computed: {
        flags() {
            return this.store.flags[item.original_language]
        },

        posterPath() {
            if (this.show.poster_path != null) return `https://image.tmdb.org/t/p/w154${this.show.poster_path}`
            else return ''
        },

        voteStars() {
            return Math.ceil(parseInt((this.show.vote_average) / 2))
        },

        voteArray() {
            const starsArray = []
            for (let i = 0; i < 5; i++) {
                if ((i + 1) < this.voteStars) {
                    starsArray.push('fa-solid')
                } else {
                    starsArray.push('fa-regular')
                }
            } return starsArray;
        }
    },

}
</script>

<template>
    <div class="card">
        <ul class="card-info">
            <li class="card-title">Title: {{ show.title }}</li>
            <li>Original Title: {{ show.original_title }}</li>
            <li class="language">Language:
                <img height="15" class="flag" v-if="store.flags[show.original_language]"
                    :src="store.flags[show.original_language]" alt="">
                <p v-else>{{ show.original_language }}</p>
            </li>
            <li class="stars">
                <font-awesome-icon v-for="star in voteArray" :icon="`${star} fa-star`" />
            </li>
        </ul>
        <img :src="posterPath">
    </div>
</template>

<style scoped lang="scss"></style>