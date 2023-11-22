/**
 * Return a product object with its product price and sell price
 * @param {number} productPrice contains the product price of the product 
 * @param {number} sellPrice contains the sell price of the product 
 * @returns the product object with its two prices
 */
function referenceNewProduct(productPrice, sellPrice){
    let product = {
        productPrice: productPrice,
        sellPrice: sellPrice
    };

    return product;
}

/**
 * Calculate the profit of a given product based on its prices
 * @param {number} product contains the product to calculate profit of
 * @returns the profit of the product
 */
function getProductProfit(product){
    return product.sellPrice - product.productPrice;
}

let product = referenceNewProduct(5, 2);
let profit = getProductProfit(product);
let profitMessage = profit >= 0 ? "You earned money : " : "You lost money :";
console.log(profitMessage + profit + "€.");