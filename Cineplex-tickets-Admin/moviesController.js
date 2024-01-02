import Model from './moviesModel'

class Controller{
    constructor() {
        this.model = new Model();
    }

    loadMovieFromBackend() {
        return this.model.loadMovieFromBackend()
    }

    deleteMovie(movieId) {
        return this.model.deleteMovie(movieId)
    }
}

export default Controller;
