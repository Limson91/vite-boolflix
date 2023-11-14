<script>
import { store } from '../store';
import MovieCards from './MovieCards.vue';
import TvShowCards from './TvShowCards.vue';

export default {
    data() {
        return {
            store: store,
        };
    },

    components: {
        MovieCards,
        TvShowCards
    }
}
</script>

<template>
    <div class="container" v-show="store.moviesArray.length > 0">
        <div class="row card-container">
            <MovieCards :movie="movie" v-for="movie in store.moviesArray" />
        </div>
    </div>

    <div class="container" v-show="store.tvShowsArray.length > 0">
        <div class="row card-container">
            <TvShowCards :show="show" v-for="show in store.tvShowsArray" />
        </div>
    </div>
</template>

<style scoped></style>