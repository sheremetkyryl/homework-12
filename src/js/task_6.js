function calculateTotalPrice(allProdcuts, productName) {
    let totalPrice = 0;
    for(let product of allProdcuts) {
        totalPrice += product.price * product.quantity
    }
    return totalPrice
}

const products = [
    { name: 'apple', price: 5, quantity: 10 },
    { name: 'banana', price: 3, quantity: 5 },
    { name: 'orange', price: 4, quantity: 8 }
];

console.log(calculateTotalPrice(products))