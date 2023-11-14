import { reactive } from 'vue';

export const store = reactive(
    {
        searchString: '',
        moviesArray: [],
        tvShowsArray: [],
        flags: {
            de: '/germany.webp',
            it: '/italy.webp',
            es: '/spain.png',
            en: '/uk.webp',
            fr: '/france.png',
            ja: '/japan.png',
        },

    }
)