import mongoose from "mongoose";
import { MONGO_SERVER_URL } from "./server-config.js";

mongoose.set('strictPopulate', false);

const connect = async () => {
    try {
        await mongoose.connect(MONGO_SERVER_URL);
        console.log('mongoose server connected');
    } catch (error) {
        console.log('failed to connect to mongoose',error);
        throw error;
    }
}
export {
    connect
}