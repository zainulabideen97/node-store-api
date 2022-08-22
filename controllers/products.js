const Product = require('../models/product');


async function GetAllProducts(req, res) {
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const criteria = {};

    if (featured) {
        criteria.featured = featured === 'true';
    }

    if (company) {
        criteria.company = company;
    }

    if (name) {
        criteria.name = {
            $regex: name,
            $options: 'i'
        };
    }

    if (numericFilters) {
        const operatorMap = {
            '>': '$gt',
            '>=': '$gte',
            '=': '$eq',
            '<': '$lt',
            '<=': '$lte'
        };

        const regEx = /\b(>|>=|=|<|<=)\b/g;
        let filters = numericFilters.replace(regEx, (match) => `^${operatorMap[match]}^`);

        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('^');

            if (options.includes(field)) {
                criteria[field] = { [operator]: Number(value) };
            }
        });

    }

    let query = Product.find(criteria);

    if (fields) {
        const fieldList = fields.split(',').join(' ');
        query = query.select(fieldList);
    }

    if (sort) {
        const sortList = sort.split(',').join(' ');
        query = query.sort(sortList);
    }
    else {
        query = query.sort('createdAt');
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    query = query.skip(skip);
    query = query.limit(limit);

    const products = await query;
    res.status(200).send({ products, nbHits: products.length });
}

async function GetAllProductsStatic(req, res) {
    res.send('Get All Products Static!!!');
}

module.exports = {
    GetAllProducts,
    GetAllProductsStatic
};