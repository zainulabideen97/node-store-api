async function GetAllProducts(req, res) {
    res.send('Get All Products!!!');
}

async function GetAllProductsStatic(req, res) {
    res.send('Get All Products Static!!!');
}

module.exports = {
    GetAllProducts,
    GetAllProductsStatic
};