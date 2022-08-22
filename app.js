const express = require('express');
const app = express();
const ConnectDatabase = require('./db/connect');
require('dotenv').config();
require('express-async-errors');
const NotFound = require('./middlewares/not-found');

const ProductsRoutes = require('./routes/products');



app.get('/', (req, res) => {
    res.end('<h1>Node Store Api</h1><a href="/api/v1/products">Go to products</a>');
});

app.use(express.json());
app.use('/api/v1/products', ProductsRoutes);

const port = process.env.PORT || 3000;
app.use(NotFound);

async function RunServer() {
    try {
        await ConnectDatabase(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}


RunServer();
