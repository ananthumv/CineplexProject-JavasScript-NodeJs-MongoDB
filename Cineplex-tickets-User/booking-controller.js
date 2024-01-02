import Model from "./booking-model";

class Controller {
    constructor() {

        this.model = new Model();

    }

    getContacts() {
        return this.model.getContacts();
    }

    setContacts(name, email, number) {

        let isvalid = true

        if (name.length <= 0 || name.length >= 15  )  {
            isvalid = false
            console.log("Please fill this column")
            return
        }
        if (number.length < 10 || number.length > 12 ) {
            isvalid = false
            console.log("Enter a valid contact number")
            return
        }

        const seatsSelected = JSON.parse(localStorage.getItem('seats'))
        console.log(seatsSelected)

        let values = {
            name : name,
            email : email,
            number : number,
            seatsSelected : seatsSelected
        }

        return this.model.setContacts(values)

    }
}

export default Controller;