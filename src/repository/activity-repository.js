import { Activity } from '../model/activity-model.js';

class ActivityRepository {
    
    async createActivity(data) {
        try {
            const task = await Activity.create(data);
            return task;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            await Activity.findByIdAndDelete(id);
            return true;
        } catch (error) {
            throw error;
        }
    }

    async findActivityById(id) {
        try {
            const task = await Activity.findById(id);
            return task;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            const tasks = await Activity.find();
            return tasks;
        } catch (error) {
            throw error;
        }
    }

    async findByIdAndUpdate(id, data) {
        try {
            await Activity.findByIdAndUpdate(id , data);
            return true;
        } catch (error) {
            throw error;
        }
    }
}

export {
    ActivityRepository
}