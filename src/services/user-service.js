import { UserRepository } from  '../repository/user-repository.js';

import { ValidationError } from '../utils/error/validation-error.js';
import { UniqueConstraintError } from '../utils/error/unique-error.js';

import { JWT_KEY } from '../config/server-config.js';
import jwt from 'jsonwebtoken'

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_KEY);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async create(data) {
        try {
            const user = await this.userRepository.createUser(data);
            return user;
        } catch (error) {
            
            if (error.errorResponse.code == 11000) {
                throw new UniqueConstraintError(error);
            }

            if (error.errors.name = 'ValidatorError') {
                throw new ValidationError(error);
            }
            throw error;
        }
    }

    async signIn(data) {
        try {
            const user = await this.userRepository.findByEmail(data.email);
            if (!user) {
                throw {erorr : 'User does not exists'};
            }
            const response = await user.comparePassword(data.password);
            if (!response) {
                throw { error: 'incorrect passworrd'};
            }

            const token = user.genJWT();
            return token;
        } catch (error) {
            throw error;
        }
    }

    async isAuthenticated(token) {
        try {
            const response = await this.verifyToken(token);
            if (!response) {
                throw {error : 'invalid token'} ;
            }

            const user = await this.userRepository.findUserById(response.id);
            if (!user) {
                throw { error: 'no user found or token expired'};
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findUserById(id) {
        try {
            const user = await this.userRepository.findUserById(id);
            return user;
        } catch (error) {
            throw error;
        }
    }

}

export {
    UserService
}