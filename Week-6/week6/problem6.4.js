function findMaximumProfit(prices, i, k, buy, v) {
 
    if (i >= prices.length || k <= 0)
        return 0;
 
    if (v[i][buy] != -1)
        return v[i][buy];

    let nbuy;
    if (buy == 1)
        nbuy = 0;
    else
        nbuy = 1;
    if (buy == 1) {
        return v[i][buy] = Math.max(-prices[i] +
            findMaximumProfit(prices, i + 1, k, nbuy, v),
            findMaximumProfit(prices, i + 1, k, buy, v));
    }
 
    else {
 
        if (buy == 1)
            nbuy = 0;
        else
            nbuy = 1;
        return v[i][buy] = Math.max(prices[i] +
            findMaximumProfit(prices, i + 1, k - 1, nbuy, v),
            findMaximumProfit(prices, i + 1, k, buy, v));
    }
}
 
function maxProfit(prices) {
    let n = prices.length;
    let v = new Array(n).fill(0).map(() => new Array(2).fill(-1))
 
   
    return findMaximumProfit(prices, 0, 1, 1, v);
}
 
let prices = [7, 1, 5, 3, 6, 4];
 
let ans = maxProfit(prices);
 

console.log(ans);