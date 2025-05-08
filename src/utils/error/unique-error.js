import { StatusCodes } from "http-status-codes";

class UniqueConstraintError extends Error {
    constructor(error) {
        super();
        this.code = error.errorResponse.code,
        this.errorValue = error.errorResponse.keyValue;
        this.message = error.errorResponse.errmsg;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

export { 
    UniqueConstraintError
}