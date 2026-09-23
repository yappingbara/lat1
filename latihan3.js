const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" },
    ],
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" },
    ],
  },
];

function findProductsByTag(products, tag) { 
    return products.filter(p => p.tags.includes(tag)); 
}

const result3 = products.map(p => ({
    id: p.id,
    title: p.title,
    totalReviews: p.reviews.length
}));

console.log(result3);

const reviews5 = products.flatMap(product =>
    product.reviews.filter(review => review.rating === 5)
);

//console.log(reviews5);

const averageRating = products.map(product => {
    const total = product.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
    );

    return {
        title: product.title,
        average: total / product.reviews.length
    };
});

//noconsole.log(averageRating);

const Maxrev = products.reduce((max, product) => {
    return product.reviews.length > max.reviews.length ? product : max;
});

//console.log(Maxrev)

const allRatings = products.map(product =>
    product.reviews.map(review => review.rating)
);

//console.log(allRatings);
//kurang 4-7

//total.review === "0" ? 0 : total/p.length