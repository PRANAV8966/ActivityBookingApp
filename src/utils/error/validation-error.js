import { StatusCodes } from "http-status-codes";

class ValidationError extends Error {
    constructor(error) { 
        super();
        this.name = error.name;
        this.explanation = error._message;
        this.message = error.message;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

export {
    ValidationError
}