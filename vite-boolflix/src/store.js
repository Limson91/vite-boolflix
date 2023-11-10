import { reactive } from 'vue';

export const store = reactive(
    {
        searchString: '',
        moviesArray: [],
    }
)