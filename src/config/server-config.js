import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT;
const JWT_KEY = process.env.JWT_KEY;
const MONGO_SERVER_URL = process.env.MONGO_SERVER_URL;
const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS, 10);
export {
    PORT,
    JWT_KEY,
    MONGO_SERVER_URL,
    SALT_ROUNDS
}