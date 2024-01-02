import Model from "./booking-model.js";

class Controller {
    constructor () {
        this.model = new Model()
    }

    loadTicketsFromBackend() {
        return this.model.loadTicketsFromBackend()
    }

    getContacts(){
        return this.model.getContacts();
    }
}



export default Controller;