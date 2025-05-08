import { ActivityService } from "../services/activity-service.js";
import { StatusCodes } from "http-status-codes";

const activityController = new ActivityService();

const createActivity = async (req, res) => {
    try {
        const activity = await activityController.create(req.body);
        return res.status(StatusCodes.CREATED).json({
            data : activity,
            success:true,
            message: 'successfully created activity',
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data :{},
            success:false,
            message: 'failed to create activity',
            error: error
        });
    }
}

const findAll = async (req, res) => {
    try {
        const activities = await activityController.findAll();
        return res.status(StatusCodes.OK).json({
            data : activities,
            success:true,
            message: 'successfully fetched activities',
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data :{},
            success:false,
            message: 'failed to fetch activities',
            error: error
        });
    }
}

const deleteActivity = async (req, res) => {
    try {
        await activityController.delete(req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message: 'deleted activity',
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'failed to delete activity',
            error: error
        });
    }
}

const findActivityById = async (req, res) => {
    try {
        const activity = await activityController.findActivityById(req.params.id);
        return res.status(StatusCodes.OK).json({
            data : activity,
            success:true,
            message: 'successfully fetched activity',
            error: {}
        });
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data :{},
            success:false,
            message: 'failed to fetch activity',
            error: error
        });
    }
}

const findByIdAndUpdate = async (req, res) => {
    try {
        await activityController.findByIdAndUpdate(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            success:true,
            message: "successfully updated activity",
            error: {}
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message: 'failed to update activity',
            error: error
        });
    }
}

export {
    createActivity,
    findAll,
    deleteActivity,
    findActivityById,
    findByIdAndUpdate
}