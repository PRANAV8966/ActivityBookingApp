import { User } from '../model/user-model.js';
import { Activity } from '../model/activity-model.js';

class UserRepository {
    async createUser(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            await User.findByIdAndDelete(id);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async findUserById(id) {
        try {
            const user = await User.findById(id).populate({
                path: 'activity',
                select: 'title description location dateTime',
            });
            return user;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            const users = await User.findAll();
            return users;
        } catch (error) {
            throw error;
        }
    }

    async findByEmail(email) {
        try {
            const user = await User.findOne({email:email});
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export {
    UserRepository
}