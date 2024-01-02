import Model from "./updateMovieModel";

class Controller {
    constructor() {
        this.model = new Model();

    }

    loadMovieFromBackend(movieId) {
        return this.model.loadMovieFromBackend(movieId)
    }
    
    getMovieDetails() {
        return this.model.getMovieDetails();
    }


    updateMovies(movieId, title, image, director, genre, duration, summery) {
        let values = {
            title : title,
            image : image,
            director : director,
            genre : genre,
            duration : duration,
            summery : summery
        }
        // console.log(values)
        return this.model.updateMovies(movieId, values)

    }

    // updateMovies(title, image, director, genre, duration, summery) {
    //     let values = {
    //         title : title,
    //         image : image,
    //         director : director,
    //         genre : genre,
    //         duration : duration,
    //         summery : summery
    //     }
    //     // console.log(values)
    //     // console.log("grrfg")
    //     return this.model.updateMovies( values)
    // }
}

export default Controller;