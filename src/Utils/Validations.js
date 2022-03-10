class Validations {

    ValidateFirstname(name){
        if(name === ''){
            return {
                status: false,
                err: 'Debe ingresar un nombre'
            }
        }
        if(name.length < 2) {
            return {
                status: false,
                err: 'Debe tener mínimo 2 caracteres'
            }
        } else {
            return {
                status: true
            }
        }
    }
    ValidateLastname(name){
        if(name === ''){
            return {
                status: false,
                err: 'Debe ingresar un apellido'
            }
        }
        if(name.length < 2) {
            return {
                status: false,
                err: 'Debe tener mínimo 2 caracteres'
            }
        } else {
            return {
                status: true
            }
        }
    }
    ValidateEmail(name){
        if(name === ''){
            return {
                status: false,
                err: 'Debe ingresar un Email'
            }
        }
        if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(name)) {
            return {
                status: false,
                err: 'Debes ingresar un mail valido'
            }
        } else {
            return {
                status: true
            }
        }
    }

}
export default Validations;