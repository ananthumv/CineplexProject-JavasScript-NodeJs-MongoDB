import axios from "axios";

const axios = require('axios');

class Model {
    constructor() {

        this.contacts = []

    }

    async loadTicketsFromBackend() {
        const res = await axios.get('http://localhost:9000/booking')
        const booking = res.data 

        return booking;
    }

    async getContacts() {
        // return this.contacts;
        const res = await axios.get('http://localhost:9000/booking');

        return res.data;

    }

    async setContacts(contact) {

        const res = await axios.post('http://localhost:9000/booking', contact)
        // this.contacts.push(contact)
        return res 
        
    }

}

export default Model;