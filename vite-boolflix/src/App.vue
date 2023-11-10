<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default {
  data() {
    return {
      api_key: '51194c244fcf78d6ef455b6b6578df95',
      query: 'Ritorno al futuro'
    };
  },

  methods: {
    fetchMovies() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.api_key,
          query: this.query
        }
      }).then(res => {
        console.log(res.data.results);
      });
    }
  },

  created() {
    this.fetchMovies();
  },

  components: { AppHeader }
}
</script>

<template>
  <AppHeader @doSearch="fetchMovies" />
</template>

<style scoped></style>
