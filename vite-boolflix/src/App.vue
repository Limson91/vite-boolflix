<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import { store } from './store';


export default {
  data() {
    return {
      api_key: '51194c244fcf78d6ef455b6b6578df95',
      query: 'Star Wars'
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
        store.moviesArray = res.data.results;
      });
    }
  },

  created() {
    this.fetchMovies();
  },

  components: { AppHeader, AppContent }
}
</script>

<template>
  <AppHeader @doSearch="fetchMovies" />
  <AppContent />
</template>

<style lang="scss">
@use './style/general.scss';
</style>