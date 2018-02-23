// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    let acc = currency;
    let H = Math.floor(currency/50);
    acc = acc - H * 50;
    let Q = Math.floor(acc/25);
    acc = acc - Q * 25;
    let D = Math.floor(acc/10);
    acc = acc - D * 10;
    let N = Math.floor(acc/5);
    acc = acc - N * 5;
    let P = acc;
    let result = {};
    if (H > 0) result.H = H;
    if (Q > 0) result.Q = Q;
    if (D > 0) result.D = D;
    if (N > 0) result.N = N;
    if (P > 0) result.P = P;
    return result
};
