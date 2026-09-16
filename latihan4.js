tags.flat();  
["computer", "office", "electronics", "gaming", "computer"] 
const products = [ { title: "Laptop", tags: ["computer", "office"] }, { title: "Phone", tags: ["mobile"] } ]; 
const allTags = products.flatMap(p => p.tags);
console.log(allTags);
//kurang 4.2