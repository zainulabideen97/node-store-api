const express = require('express');
const app = express();
const ConnectDatabase = require('./db/connect');
require('dotenv').config();
const NotFound = require('./middlewares/not-found');


app.use(express.json());

// app.use('/api/v1/tasks', TaskRoutes);
app.use(NotFound);


app.get('/', (req, res) => {
    res.end('Node Store Api!');
});


const port = process.env.PORT || 3000;


async function RunServer() {
    try {
        await ConnectDatabase(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}


RunServer();
