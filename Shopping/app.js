
let p=fetch("https://fakestoreapi.com/products")
.then(response=>response.json())
.then(data=>{
data.map(({image,title,price,category})=>{
    let products=document.getElementById("products")
    products.innerHTML+=`
    <div class="shoppinglist"><img src="${image}">
    <h1>${title}</h1>
    <h2>\u20B9${price}</h2>
    <p>${category}</p></div>
    
    `
})
})