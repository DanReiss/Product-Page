// cart
const cartProfile = document.getElementById('user-section');
const cartBox = document.querySelector('.cart-box');
const cartContainerItem = document.querySelector('.cart-container')
const cartItem = document.querySelector('.cart-container-link');
const cartEmpty = document.querySelector('.cart-empty');
const TitleYourCart = document.querySelector(".cart-box h3")
// sistema quantidade de itens
const minusItem = document.querySelector('.minus-item');
const plusItem = document.querySelector('.plus-item');
let itemsToAdd = document.querySelector('.items-to-add');
// cart
const cartBoxClick = document.querySelector('.add-to-cart');
let sizesSelector = document.querySelectorAll('.num-box');
let size1 = document.getElementById('A40');
let price1 = document.getElementById('PriceA2');
//
const deleteItem = document.querySelector('.delete-item')

// em produção

let newSize = '';
let newItems = 0;

cartBoxClick.addEventListener('click', () =>{
  if(newItems !== 0 & productInfo1.quantity === 0){
    productInfo1.quantity = newItems;
    cartEmpty.style.display = 'none';
    cartItem.style.display = 'grid';
    addToCart();
    newItems = 0;
    itemsToAdd.innerHTML = 0;
    cartBox.style.display = 'grid';
    cartContainerItem.style.display = 'block';
    TitleYourCart.focus();
    setTimeout( () =>{
      cartBox.style.display = 'none';
    }, 1500)
  }else if (productInfo1.quantity !== 0 && newItems !== 0){
    productInfo1.quantity += newItems;
    addToCart();
    newItems = 0;
    itemsToAdd.innerHTML = 0;
    cartBox.style.display = 'grid';
    cartContainerItem.style.display = 'block';
    TitleYourCart.focus();
    setTimeout( () =>{
      cartBox.style.display = 'none';
    }, 1500)
  }else if (newItems === 0){
    itemsToAdd.style.color = 'red';
    setTimeout(() =>{
      itemsToAdd.style.color = 'black';
    },1.5 * 1500)
  }
  
})



let productInfo1 = {
    name: "Air Force 1 Premium", 
    price: "400", 
    discount: "0", 
    size : "",
    quantity: 0,
};


function addToCart(){
  if(newItems !== 0){
    price1.innerHTML = productInfo1.price + "x" + productInfo1.quantity + "<b>" + " $" + productInfo1.price * productInfo1.quantity + "</b>";
    itemsToAdd.innerHTML = productInfo1.quantity;
  }else{
    return false;
  }
};

//delete item do carrinho

deleteItem.addEventListener('click', () =>{
  productInfo1.quantity = 0;
  cartContainerItem.style.display = "none";
  cartEmpty.style.display = "block"
  addToCart();
});

// quantidade para adicionar no carrinho

minusItem.addEventListener('click', ()=>{
  if(newItems !== 0){
    newItems--;
    itemsToAdd.innerText = newItems;
  }else{
    return
  };
});

plusItem.addEventListener('click', ()=>{
  if(newItems <  7){
    newItems++;
    itemsToAdd.innerText = newItems;
  }else{
    return
  };
});


let newCartContainer = cartContainerItem.cloneNode(true);

let displayOn = true
addEventListener('click', (e) =>{
  if(displayOn){
    if(e.target.classList[0] === 'profile-image' || e.target.classList[0] === 'cart' || e.target.classList[0] === 'img-arc'){
    displayOn = false;
    cartBox.style.display = 'grid';
    }else{
      return;
    } 
  }else {
    cartBox.style.display = 'none';
    displayOn = true;
  }
});
//---------------------------------------------------------

// Mobile Nav Bar

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    };
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    };
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    };
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    };
  };
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  
  mobileNavbar.init();