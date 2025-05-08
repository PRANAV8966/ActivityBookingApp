import { StatusCodes } from "http-status-codes";

function validateCredential(req, res, next) {
    
    try {
        if (!req.body.name || !req.body.password || !req.body.email) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                data:{},
                message: 'complete infromation is required',
                success:false,
                error: {error: 'incomplete information'}
            });
        }

        let email = req.body.email;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                data:{},
                message: 'invalid email',
                success:false,
                error: {error : 'check your email address'}
            });
        } else if (req.body.password.length < 8) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                data:{},
                message: 'password must be of 8 characters',
                success:false,
                error: {error : 'check the length of password'}
            });
        }

        next();

    } catch (error) {
        throw error;
    }
}

export {
    validateCredential
}