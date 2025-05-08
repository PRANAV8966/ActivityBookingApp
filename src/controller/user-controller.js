import { UserService } from "../services/user-service.js";
import { StatusCodes } from "http-status-codes";

const userController = new UserService();

const SignUp = async (req, res) => {
    try {
        const user = await userController.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: user,
            success:true,
            message : 'successfully created user',
            error:{}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            errorCode:error.code,
            message : error.message,
            error: error.errorValue
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userController.signIn(req.body);
        return res.status(StatusCodes.CREATED).json({
            data: response,
            success:true,
            message : 'successfully logged-In user',
            error:{}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'failed to log-In',
            error: error
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const response = await userController.isAuthenticated(req.headers['x-access-token']);
        return res.status(StatusCodes.OK).json({
            token: response,
            success: true,
            message: 'token is valid and user is authenticated',
            error:{}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ 
            data:{},
            success: false,
            message: 'Invlaid token',
            error: error
        });
    }
}

const findUserById = async (req, res) => {
    try {
        const user = await userController.findUserById(req.params.id);
        return res.status(StatusCodes.OK).json({
            data:user,
            sucess:true,
            message: 'successfully fetched user',
            error:{}

        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data:{},
            sucess:false,
            message: 'failed to fetch user',
            error: error
        });
    }
}

export {
    SignUp,
    signIn,
    isAuthenticated,
    findUserById
}