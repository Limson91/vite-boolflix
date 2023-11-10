<script>
import { store } from '../store';
import Cards from './Cards.vue';

export default {
    data() {
        return {
            store: store,
        };
    },
    components: { Cards }
}

components: { Cards }
</script>

<template>
    <div class="container" v-show="store.moviesArray.length > 0">
        <div class="row">
            <div class="col-4" v-for="movie in store.moviesArray">
                <Cards :movie="movie" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>