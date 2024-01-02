import axios from "axios";


class Model {
    constructor() {

        this.movies = []

    }

    async loadMovieFromBackend() {
        const res = await axios.get('http://localhost:9000/movies')
        const movies = res.data 

        return movies;
    }

}

export default Model;