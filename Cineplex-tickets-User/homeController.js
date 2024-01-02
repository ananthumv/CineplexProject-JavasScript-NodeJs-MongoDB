import Model from './homeModel'

class Controller{
    constructor() {
        this.model = new Model();
    }

    loadMovieFromBackend() {
        return this.model.loadMovieFromBackend()
    }
}

export default Controller;
