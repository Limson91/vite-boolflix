<script>
export default {
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="card">
        <ul class="movie-card">
            <li>Titolo: {{ movie.title }}</li>
            <li>Titolo originale: {{ movie.original_title }}</li>
            <li>Lingua: {{ movie.original_language }}</li>
            <li>Voto: {{ movie.vote }}</li>
        </ul>
    </div>
</template>

<style scoped></style>