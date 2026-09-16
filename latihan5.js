const laptopPrices = products .filter(p => p.category === "laptops") .map(p => p.price); const avg = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;
function getStatistics(products) {
    const totalProducts = products.length;

    const totalStock = products.reduce(
        (acc, product) => acc + product.stock,
        0
    );

    const averagePrice = products.reduce(
        (acc, product) => acc + product.price,
        0
    ) / totalProducts;
    const highestPrice = Math.max(
        ...products.map(product => product.price)
    );

    const lowestPrice = Math.min(
        ...products.map(product => product.price)
    );

    const averageRating = products.reduce(
        (acc, product) => acc + product.rating,
        0
    ) / totalProducts;

    return {
        totalProducts,
        totalStock,
        averagePrice,
        highestPrice,
        lowestPrice,
        averageRating
    };
}

console.log(getStatistics(products));