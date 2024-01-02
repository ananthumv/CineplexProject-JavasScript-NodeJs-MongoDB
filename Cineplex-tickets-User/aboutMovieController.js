import Model from "./aboutMovieModel";

class Controller{
    constructor() {
        this.model = new Model();
    }

    loadMovieFromBackend(movieId) {
        return this.model.loadMovieFromBackend(movieId)
    }

    loadScreeningsFromBackend(movieId) {
        return this.model.loadScreeningsFromBackend(movieId)
    }


}

export default Controller;