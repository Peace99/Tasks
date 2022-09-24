


class CustomAPIError extends Error {
    //constructors are invoked when a new instance of a class
    constructor(message, statusCode){
        //super methods are used when extending and it invokes a constructor of a parent class
        super(message)
        //creates a statuscode property
        this.statusCode = statusCode
    }
}

const createCustomError = (msg, statusCode) => {
    return new CustomAPIError(msg, statusCode)
}

module.exports = {createCustomError, CustomAPIError}