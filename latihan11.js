const categories = [...new Set(products.map(p => p.category))];
const brands = [...new Set(products.map(p => p.brand))];
const tags = [...new Set(products.map(p => p.tag))];
//databelum ada