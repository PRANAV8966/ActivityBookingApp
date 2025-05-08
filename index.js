import express from 'express';
const app = express();

import { PORT } from './src/config/server-config.js';
import { connect } from './src/config/db-config.js';
import apiRoutes from './src/routes/index.js';

const startServer = async () => {

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    await connect();

    app.use('/api', apiRoutes);
    app.listen(PORT, () => {
        console.log(`server started on ${PORT}`);
    })
}
startServer();
