require('dotenv').config();
const ConnectDatabase = require('./db/connect');


const Product = require('./models/product');
const jsonProducts = require('./products.json');


async function Start() {
    try {
        await ConnectDatabase(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);

        console.log('Done!!!');
    } catch (error) {
        console.log('Error: ', error);
    }
}

Start();
