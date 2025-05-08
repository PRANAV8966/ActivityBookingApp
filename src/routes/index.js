import express from 'express';
const router = express.Router();

import { SignUp, signIn, isAuthenticated, findUserById } from '../controller/user-controller.js';
import {createActivity, findAll, deleteActivity, findActivityById, findByIdAndUpdate } from '../controller/activity-controller.js';

import { validateCredential } from '../middleware/validate-request.js';
import { StatusCodes } from 'http-status-codes';


// API check
router.get('/', (req, res) => {
    return res.status(StatusCodes.OK).json({
        success:true,
        message: 'api route working properly',
        error: {}
    });
});

// User
router.post('/signUp', validateCredential, SignUp);
router.post('/signIn', signIn);
router.post('/isAuthenticated', isAuthenticated);

router.get('/getUser/:id', findUserById);

// Activity
router.get('/activities', findAll);
router.get('/Activity/:id', findActivityById);


router.delete('/deleteActivity', deleteActivity);

router.post('/activityBooking', createActivity);
router.patch('/updateActivity/:id', findByIdAndUpdate);

export default router;