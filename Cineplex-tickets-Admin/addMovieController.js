import Model from "./addMovieModel";

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


    addMovies(title, image, director, genre, duration, summery) {
        let values = {
            title : title,
            image : image,
            director : director,
            genre : genre,
            duration : duration,
            summery : summery
        }

        return this.model.addMovies(values)

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