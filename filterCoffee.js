function search(budget, prices) {
    const result = [];
    for (const price of prices){
        if (price <= budget){
            result.push(price);
        }
    }  
    return String(result.sort((a, b) => a-b))
}

console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));