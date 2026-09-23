const products = [
    { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
    { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
    { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
    { id: 4, title: "Gaming Laptop", price: 1500, category: "laptops", stock: 7 },
    { id: 5, title: "Tablet", price: 500, category: "tablets", stock: 10 },
    { id: 6, title: "Smartwatch", price: 250, category: "wearables", stock: 8 },
    { id: 7, title: "Wireless Mouse", price: 35, category: "accessories", stock: 20 },
    { id: 8, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 12 },
    { id: 9, title: "Monitor", price: 300, category: "monitors", stock: 6 },
    { id: 10, title: "Webcam", price: 75, category: "accessories", stock: 14 },
    { id: 11, title: "Bluetooth Speaker", price: 120, category: "audio", stock: 9 },
    { id: 12, title: "Gaming Headset", price: 150, category: "audio", stock: 5 },
    { id: 13, title: "iPhone", price: 1100, category: "phones", stock: 4 },
    { id: 14, title: "Android Phone", price: 650, category: "phones", stock: 11 },
    { id: 15, title: "External SSD", price: 130, category: "storage", stock: 16 },
    { id: 16, title: "USB Flash Drive", price: 25, category: "storage", stock: 30 },
    { id: 17, title: "Power Bank", price: 45, category: "accessories", stock: 18 },
    { id: 18, title: "USB-C Hub", price: 40, category: "accessories", stock: 13 },
    { id: 19, title: "Printer", price: 200, category: "printers", stock: 6 },
    { id: 20, title: "Projector", price: 450, category: "electronics", stock: 4 },
    { id: 21, title: "Smart TV", price: 700, category: "electronics", stock: 5 },
    { id: 22, title: "Bluetooth Earbuds", price: 80, category: "audio", stock: 22 },
    { id: 23, title: "Laptop Stand", price: 55, category: "accessories", stock: 17 },
    { id: 24, title: "Gaming Chair", price: 350, category: "furniture", stock: 3 },
    { id: 25, title: "Router", price: 100, category: "networking", stock: 10 },
    { id: 26, title: "WiFi Extender", price: 60, category: "networking", stock: 8 },
    { id: 27, title: "Graphics Tablet", price: 180, category: "tablets", stock: 7 },
    { id: 28, title: "Digital Camera", price: 900, category: "cameras", stock: 4 },
    { id: 29, title: "Action Camera", price: 300, category: "cameras", stock: 9 },
    { id: 30, title: "Microphone", price: 110, category: "audio", stock: 12 }
];
function priceasc(products) { 
    const arr = products.map(price => price.price)
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] > arr[j + 1]) {
             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
            } 
        } 
    } return arr; 
    
    // 2 5 3 1 4-1-1 = 3
 // 2 3 5 1

 // 2 3 1 5
 // 2 1 3 5 6 7 8 9
}
console.log(priceasc(products))
function pricedes(products) { 
    const arr = products.map(price => price.price)
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
         if (arr[j] < arr[j + 1]) {
             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
            } 
        } 
    } return arr; 
}
//console.log(pricedes(products))
 //kenapa arr.length utk j harus dikurang lagi dengan - i
 //kurang rating ama title