<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';
import { store } from './store';


export default {
  data() {
    return {
      store: store,
      api_key: '51194c244fcf78d6ef455b6b6578df95',
      query: 'Star Wars'
    };
  },

  methods: {
    searchTitle() {
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.api_key,
          query: this.query
        }
      }).then(res => {
        this.store.moviesArray = res.data.results;
      });

      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: this.api_key,
          query: this.query
        }
      }).then(res => {
        this.store.tvShowsArray = res.data.results;
      })
    }
  },

  created() {
    this.searchTitle();
  },

  components: { AppHeader, AppContent }
}
</script>

<template>
  <AppHeader @doSearch="searchTitle" />
  <AppContent />
</template>

<style lang="scss">
@use './style/general.scss';
</style>