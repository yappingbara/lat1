const cart = [ { title: "Laptop", price: 1000, discountPercent: 10 }, 
    { title: "Mouse", price: 20, discountPercent: 5 }, 
    { title: "Keyboard", price: 50, discountPercent: 0 } ];

function calculateDiscountedPrice(price, discountPercent) { 
    return price - (price * discountPercent) / 100
   
}
const result = [];
function applyDiscounts(cart) {
      
     for (const item of cart){
       result.push(
       calculateDiscountedPrice(item.price,item.discountPercent)
       )

       }

     
     return result
    }
    console.log(applyDiscounts)
    
