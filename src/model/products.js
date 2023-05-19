const db = require("../database/db.js");

//challenge 1
const select_products = db.prepare(/*sql*/
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

const listProducts = () => {
return select_products.all();
};
let allProducts = listProducts();
console.log(allProducts.name)

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


module.exports = { listProducts, searchProducts }