import { ActivityRepository } from "../repository/activity-repository.js";

import { ValidationError } from "../utils/error/validation-error.js";


class ActivityService {
    constructor() {
        this.activityService = new ActivityRepository();
    }

    async create (data) {
        try {
            const task = await this.activityService.createActivity(data);
            return task;
        } catch (error) {
            if (error._message = 'Task validation failed') {
                throw new ValidationError(error);
            }
            throw error;
        }
    }

    async delete(data) {
        try {
            await this.activityService.delete(data.taskId);
            return true;
        } catch (error) {
            throw error;
            }
        }
    
    async findActivityById(id) {
        try {
            const task = await this.activityService.findActivityById(id);
            return task;
        } catch (error) {
             throw error;
            }
        }
    
    async findAll() {
        try {
            const tasks = await this.activityService.findAll();
            return tasks;
        } catch (error) {
            throw error;
            }
        }

    async findByIdAndUpdate(id, data) {
        try {
            await this.activityService.findByIdAndUpdate(id, data);
            return true;
        } catch (error) {
            throw error;
            }
        }
}
export {
    ActivityService
}