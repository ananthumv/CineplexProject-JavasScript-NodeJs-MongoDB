import axios from "axios";

class Model {
    constructor() {

        this.movies = []

    }

    async loadMovieFromBackend(id) {
        const res = await axios.get('http://localhost:9000/movies/'+id)

        const movies = res.data 

        return movies
    }
    
    async loadScreeningsFromBackend(id) {
        const res = await axios.get('http://localhost:9000/screening?movie='+id)
        const screenings = res.data

        return screenings;
    }

}

export default Model;