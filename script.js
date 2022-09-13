
const cartProfile = document.getElementById('user-section')
const cartBox = document.querySelector('.cart-box')

let sizesSelector = document.querySelectorAll('.num-box')
let size1 = document.getElementById('A40');
let price1 = document.getElementById('PriceA2');

let productInfo1 = {
    name: "Air Force 1 Premium",
    price: "400",
    discount: "0",
    size : "",
    quantity: "0",
};

function addToCart(){
    productInfo1.size = "40";
    productInfo1.quantity = "3";
    size1.innerHTML = productInfo1.size;
    price1.innerHTML = "$" + productInfo1.price * productInfo1.quantity;
};

sizesSelector.forEach(sizeBox => {
    sizeBox.addEventListener('click', () => {
        // temporary solution !!! 
        sizesSelector.item(0).classList.remove("num-selected")
        sizesSelector.item(1).classList.remove("num-selected")
        sizesSelector.item(2).classList.remove("num-selected")
        sizesSelector.item(3).classList.remove("num-selected")
        sizesSelector.item(4).classList.remove("num-selected")
        sizesSelector.item(5).classList.remove("num-selected")
        sizesSelector.item(6).classList.remove("num-selected")
        sizesSelector.item(7).classList.remove("num-selected")
        sizesSelector.item(8).classList.remove("num-selected")
        sizesSelector.item(9).classList.remove("num-selected")
        // solução temporária !!!
        sizeBox.classList.add("num-selected")
        productInfo1.size = sizeBox.classList[1]
        console.log(productInfo1.size)
    });
});

cartProfile.addEventListener('mouseover', () =>{
    cartBox.style.display = 'block'
})

cartProfile.addEventListener('mouseout', () =>{
    cartBox.style.display = 'none'
})

addToCart();




