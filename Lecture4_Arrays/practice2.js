let prices = [250, 645, 300, 900, 50];
console.log(`Prices before discount: ${prices}`);

let discount_prices = [];

for(let price in prices) {
    discount_prices[price] = prices[price] - (prices[price]/10);
}

console.log(`Prices after discount: ${discount_prices}`);
