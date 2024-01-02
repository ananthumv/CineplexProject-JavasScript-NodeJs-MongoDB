import axios from "axios";

class Model {
    constructor() {

        // this.movieDetails = []
        this.movies = []


    }

    async getMovieDetails() {
        const res = await axios.get('http://localhost:9000/movies');

        return res.data;

    }
    async loadMovieFromBackend(id) {
        const res = await axios.get('http://localhost:9000/movies/'+id)

        const movies = res.data 

        return movies
    }

    async addMovies(movieDetail) {

        const res = await axios.post('http://localhost:9000/movies', movieDetail)

        return res 
    }

}

export default Model;