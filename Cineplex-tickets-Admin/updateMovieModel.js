import axios from "axios";

class Model {
    constructor() {

        this.movies = []


    }

    async getMovieDetails() {
        const res = await axios.get('http://localhost:3000/movies');

        return res.data;

    }
    async loadMovieFromBackend(id) {
        const res = await axios.get('http://localhost:3000/movies/'+id)

        const movies = res.data 

        return movies
    }

    async updateMovies(id, movieDetail) {

        const res = await axios.patch('http://localhost:3000/movies/'+id, movieDetail)
        console.log(id)
        return res 
    }

}

export default Model;