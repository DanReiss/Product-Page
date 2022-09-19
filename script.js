// cart
const cartProfile = document.getElementById('user-section');
const cartBox = document.querySelector('.cart-box');
const cartContainerItem = document.querySelector('.cart-container')
const cartItem = document.querySelector('.cart-container-link');
const cartEmpty = document.querySelector('.cart-empty');
// sistema quantidade de itens
const minusItem = document.querySelector('.minus-item');
const plusItem = document.querySelector('.plus-item');
let itemsToAdd = document.querySelector('.items-to-add');
// cart
const cartBoxClick = document.querySelector('.add-to-cart');
let sizesSelector = document.querySelectorAll('.num-box');
let size1 = document.getElementById('A40');
let price1 = document.getElementById('PriceA2');

// em produção

let newSize = '';
let newItems = 0;

cartBoxClick.addEventListener('click', () =>{
  if(productInfo1.size === '' & newItems!== 0){
    productInfo1.size = newSize;
    productInfo1.quantity = newItems;
    cartEmpty.style.display = 'none';
    cartItem.style.display = 'grid';
    addToCart();
    cartBox.style.display = 'block';
    cartContainerItem.style.display = 'block';
    setTimeout( () =>{
      cartBox.style.display = 'none';
    }, 1500)
  }else if (productInfo1.size !== '' & productInfo1.quantity != 0 & newSize !== productInfo1.size){
    let productInfo2 =  Object.assign({}, productInfo1)
    productInfo2.size = newSize;
    productInfo2.quantity = newItems;
  }else if (newSize === productInfo1.size & newItems!== 0){
    productInfo1.quantity += newItems;
    itemsToAdd = productInfo1.quantity
    addToCart();
    cartBox.style.display = 'block';
    cartContainerItem.style.display = 'block';
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
    name: "Air Force 1 Premium", price: "400", discount: "0", size : "",quantity: 0,
};
let productInfo3 = Object.assign({}, productInfo1)


function addToCart(){
  if(newItems !== 0){
    size1.innerHTML = productInfo1.size;
    price1.innerHTML = productInfo1.price + "x" + productInfo1.quantity + "<b>" + " $" + productInfo1.price * productInfo1.quantity + "</b>";
    itemsToAdd.innerHTML = productInfo1.quantity;
  }else{

    console.log("foi")
  }
};

// quantidade para adicionar no carrinho

minusItem.addEventListener('click', ()=>{
  if(newItems !== 0){
    newItems--;
    itemsToAdd.innerHTML = newItems;
  }else{
    return
  };
});

plusItem.addEventListener('click', ()=>{
  if(newItems <  7){
    newItems++;
    itemsToAdd.innerHTML = newItems;
  }else{
    return
  };
});

//----------------------------------------------------

sizesSelector.forEach(sizeBox => {
    sizeBox.addEventListener('click', () => {
        // temporary solution !!! 
        sizesSelector.item(0).classList.remove("num-selected");
        sizesSelector.item(1).classList.remove("num-selected");
        sizesSelector.item(2).classList.remove("num-selected");
        sizesSelector.item(3).classList.remove("num-selected");
        sizesSelector.item(4).classList.remove("num-selected");
        sizesSelector.item(5).classList.remove("num-selected");
        sizesSelector.item(6).classList.remove("num-selected");
        sizesSelector.item(7).classList.remove("num-selected");
        sizesSelector.item(8).classList.remove("num-selected");
        sizesSelector.item(9).classList.remove("num-selected");
        // solução temporária !!!
        sizeBox.classList.add("num-selected");
        newSize = sizeBox.classList[1];
        console.log(newSize);
});

let displayOn = 0;
addEventListener('click', (e) =>{
  if(displayOn === 0){
    if(e.target.classList[0] === 'profile-image' || e.target.classList[0] === 'cart'){
    displayOn = 1;
    cartBox.style.display = 'block';
    }else{
      return;
    } 
  }else {
    cartBox.style.display = 'none';
    displayOn = 0;
  }
});
//quando for clicado fora do elemento, display = 'none';
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

});

//-------------------------------------------------------------------------------------------------------------------------------
// Mobile Gallery e LightBox Gallery

const imagesGallery = document.querySelectorAll('.gallery');
const nxtBtn = [...document.querySelectorAll('.arrow-right')];
const bckBtn = [...document.querySelectorAll('.arrow-left')];

imagesGallery.forEach((item, i) => {
  let GalleryDimensions = item.getBoundingClientRect();
  let GalleryWidth = GalleryDimensions.width;

  nxtBtn[i].addEventListener('click', () =>{
    item.scrollLeft += GalleryWidth;
  });

  bckBtn[i].addEventListener('click', () =>{
    item.scrollLeft -= GalleryWidth;
  });
});