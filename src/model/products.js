const db = require("../database/db.js");

//challenge 1
const select_products = db.prepare(
    `SELECT 
    id,
    name,
    quantity_per_unit,
    unit_price,
    units_in_stock,
    units_on_order
    FROM products
    `
);

// const listProducts = () => {
// return select_products.all();
// };

//challenge 2

const search_products = db.prepare(/*sql*/ `
  SELECT
    id,
    name
  FROM products
  WHERE name LIKE ?
`);
const searchProducts = (searchString) =>{
return search_products.all(`%${searchString}%`)
};
//challenge 3
// const get_product = db.prepare(
//     ` SELECT
//         id,
//         name
//         FROM products
//         WHERE id LIKE ?
//     `
// );

// const getProduct = (id) => {
//     return get_product.all(`${id}`)
// };

//challenge 4
const get_product = db.prepare(/*sql*/
    ` SELECT
        products.id,
        products.name,
        categories.name AS category_name,
        categories.description AS category_description
        FROM products
        JOIN categories ON products.category_id = categories.id
        WHERE products.id = ?
    `
);
const getProduct = (id) => {
    return get_product.get(id)
};

//challenge 5

const list_products = db.prepare(/*sql*/`
    SELECT
    id,
    name,
    quantity_per_unit,
    unit_price,
    units_in_stock, 
    units_on_order,
    unit_price * units_in_stock AS stock_value
    FROM products
`
)

const listProducts = () => {
    return list_products.all();
    };
    

module.exports = { listProducts, searchProducts, getProduct }