
const firstScreen = document.getElementById('first-screen');
const secondScreen = document.getElementById('second-screen');
const goToSecondScreenButton = document.getElementById('go-to-second-screen');
const goToFirstScreenButton = document.getElementById('go-to-first-screen');


goToSecondScreenButton.addEventListener('click', function() {
  // Hide the first screen
  firstScreen.style.display = 'none';
  
  // Show the second screen
  secondScreen.style.display = 'block';
});


goToFirstScreenButton.addEventListener('click', function() {
  // Hide the second screen
  secondScreen.style.display = 'none';
  
  // Show the first screen
  firstScreen.style.display = 'block';
});




//overlay
//shop
document.querySelector('.icon img[alt="Shop"]').addEventListener('click', function() {
    document.querySelector('#shop-overlay').classList.remove('hidden');
  });
  
  document.querySelector('#close-overlay').addEventListener('click', function() {
    document.querySelector('#shop-overlay').classList.add('hidden');
  });


//shipping
  document.querySelector('.icon img[alt="Shipping"]').addEventListener('click', function() {
    document.querySelector('#ship-overlay').classList.remove('hidden');
  });
  
  document.querySelector('#close-overlay-ship').addEventListener('click', function() {
    document.querySelector('#ship-overlay').classList.add('hidden');
  });
  function showContent() {
    var selectedOption = document.getElementById("dropdown").value;
    var contents = document.getElementsByClassName("content");
  
   
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = "none";
    }
    var selectedContent = document.getElementById(selectedOption);
    selectedContent.style.display = "block";
  }
  
  //sizing
  document.querySelector('.icon img[alt="Sizing"]').addEventListener('click', function() {
    document.querySelector('#size-overlay').classList.remove('hidden');
  });
  
  document.querySelector('#close-overlay-size').addEventListener('click', function() {
    document.querySelector('#size-overlay').classList.add('hidden');
  });

  
  //signup------------------------------------------------------------------------------------------------
  document.querySelector('.icon img[alt="Signup"]').addEventListener('click', function() {
    document.querySelector('#signup-overlay').classList.remove('hidden');
  });
const editableBox = document.querySelector('.editable-box');
const submitBtn = document.querySelector('#submit-btn');
const modal = document.getElementById('modal');

editableBox.addEventListener('click', () => {
  editableBox.textContent = '';
});


submitBtn.addEventListener('click', () => {

  editableBox.textContent = '';

  modal.style.display = 'block';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
  document.querySelector('#close-overlay-signup').addEventListener('click', function() {
    document.querySelector('#signup-overlay').classList.add('hidden');
  });


  //about-------------------------------------------------------------------------------------------------

  document.querySelector('.icon img[alt="About"]').addEventListener('click', function() {
    document.querySelector('#about-overlay').classList.remove('hidden');
  });
  
  document.querySelector('#close-overlay-about').addEventListener('click', function() {
    document.querySelector('#about-overlay').classList.add('hidden');
  });


  //contact
  document.querySelector('.icon img[alt="Contact"]').addEventListener('click', function() {
    document.querySelector('#contact-overlay').classList.remove('hidden');
  });
  
  document.querySelector('#close-overlay-contact').addEventListener('click', function() {
    document.querySelector('#contact-overlay').classList.add('hidden');
  });
  
  const contactb1 = document.querySelector('.subjectbox');
const contactb2 = document.querySelector('.emailbox');
const contactb3 = document.querySelector('.messagebox');
const sendButton = document.querySelector('.stcbutton');
const modal2 = document.getElementById('modal2');

sendButton.addEventListener('click', () => {
  contactb1.textContent = '';
  contactb2.textContent = '';
  contactb3.textContent = '';

  modal2.style.display = 'block';
});

window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.style.display = 'none';
  }
});

document.querySelector('#close-overlay-signup').addEventListener('click', function() {
  document.querySelector('#signup-overlay').classList.add('hidden');
});

  






  
//------------------------------------
  function loadProductImage(imageUrl) {
    const mainImage = document.getElementById('main-image');
    mainImage.src = imageUrl;
  }
  
  
//cart

  // Function to open the cart overlay
   /*
function openCartOverlay() {
  const cartOverlay = document.getElementById("cart-overlay");
  cartOverlay.classList.remove("hidden");
}
*/

function openCartOverlay() {
  document.getElementById('shop-overlay').classList.add('hidden');
  document.getElementById('ship-overlay').classList.add('hidden');
  document.getElementById('cart-overlay').classList.remove('hidden');
}

// Function to close the cart overlay
function closeCartOverlay() {
  const cartOverlay = document.getElementById("cart-overlay");
  cartOverlay.classList.add("hidden");
}

// Event listener for the cart button
const cartButton = document.querySelector('.cart-button');
cartButton.addEventListener('click', openCartOverlay);

// Event listener for the close button in the cart overlay
const closeCartButton = document.getElementById("close-cart-overlay");
closeCartButton.addEventListener("click", closeCartOverlay);





  //direct manipulation

  

// Get the necessary elements
const shopOverlay = document.getElementById('shop-overlay');
const shopTaskbar = document.querySelector('#shop-overlay .overlay-taskbar');
const cartOverlay = document.getElementById('cart-overlay');
const cartTaskbar = document.querySelector('#cart-overlay .overlay-taskbar');

let isShopDragging = false;
let isCartDragging = false;
let shopStartOffsetX, shopStartOffsetY;
let cartStartOffsetX, cartStartOffsetY;

// Function to handle mouse down event for shop overlay
function handleShopMouseDown(event) {
  if (event.target === shopTaskbar) {
    isShopDragging = true;
    shopStartOffsetX = event.clientX - shopOverlay.offsetLeft;
    shopStartOffsetY = event.clientY - shopOverlay.offsetTop;
  }
}

// Function to handle mouse down event for cart overlay
function handleCartMouseDown(event) {
  if (event.target === cartTaskbar) {
    isCartDragging = true;
    cartStartOffsetX = event.clientX - cartOverlay.offsetLeft;
    cartStartOffsetY = event.clientY - cartOverlay.offsetTop;
  }
}

// Function to handle mouse move event
function handleMouseMove(event) {
  if (isShopDragging) {
    const newLeft = event.clientX - shopStartOffsetX;
    const newTop = event.clientY - shopStartOffsetY;
    shopOverlay.style.left = newLeft + 'px';
    shopOverlay.style.top = newTop + 'px';
  }

  if (isCartDragging) {
    const newLeft = event.clientX - cartStartOffsetX;
    const newTop = event.clientY - cartStartOffsetY;
    cartOverlay.style.left = newLeft + 'px';
    cartOverlay.style.top = newTop + 'px';
  }
}

// Function to handle mouse up event
function handleMouseUp() {
  isShopDragging = false;
  isCartDragging = false;
}

// Add event listeners for mouse events
document.addEventListener('mousedown', handleShopMouseDown);
document.addEventListener('mousedown', handleCartMouseDown);
document.addEventListener('mousemove', handleMouseMove);
document.addEventListener('mouseup', handleMouseUp);







// clothing
// clothing
// ClothingItem class
let cartItems = [];

class ClothingItem {
    constructor(name, price, images, sizes) {
      this.name = name;
      this.price = price;
      this.images = images;
      this.sizes = sizes;
      this.selectedSize = null;
    }
  }
  let selectedItem = null;
  let selectedSize = null;
  

  
  
  // Create clothing items
  const item1 = new ClothingItem('GHOST MACHINE BLACK TEE', 30, ['images/majica_front.png', 'images/majica_back.png'], ['S', 'M', 'L', 'XL']);
  const item2 = new ClothingItem('CMPLX HAND WHITE TEE', 30, ['images/white-t-shirts-front.png', 'images/white-t-shirts-.png'], ['S', 'M', 'L', 'XL']);
  const item3 = new ClothingItem('EYEBALL HOODIE', 50, ['images/hoodie_front - Copy.png', 'images/hoodie_back - Copy.png', 'images/hoodie_side - Copy.png'], ['S', 'M', 'L', 'XL']);
  const item4 = new ClothingItem('SCREAMER HAT', 30, ['images/hat_back - Copy.png', 'images/hat.png']);
  const item5 = new ClothingItem('BOMB HAT', 30, ['images/hat_back.png', 'images/hat - Copy.png']);
  
  // Store clothing items in an array
  const clothingItems = [item1, item2, item3, item4, item5];
  
  // Variables for tracking the currently displayed item
  let currentItemIndex = 0;
  
  // Function to generate product item HTML
  function generateProductItem(product) {
    const { name, price, images, sizes } = product;
  
    const productThumbsHTML = images
      .map((image, index) => `<button class="buttonz" onclick="loadProductImage('${image}')"><img src="${image}" alt="${name}"></button>`)
      .join("");
  
      let sizesHTML = "";
  if (sizes && sizes.length >= 0) {
    sizesHTML = sizes
      .map((size) => {
        const selectedClass = size === selectedSize ? 'selected' : '';
        return `<button class="size-button ${selectedClass}" onclick="selectSize(this)">${size}</button>`;
      })
      .join("");
    }
    
      return `
        <div class="product-container">
          <div class="product-thumbs">
            ${productThumbsHTML}
          </div>
          <div class="product-main-image">
            <img id="main-image" src="${images[0]}" alt="${name}">
          </div>
          <div class="product-details">
            <div class="product-name">${name}</div>
            <div class="product-price">$${price}</div>
            <button class="buttonz" onclick="buyNow()">Buy Now</button>
            <button class="buttonz" onclick="addToCart()">Add to Cart</button>
          </div>
        </div>
        ${sizesHTML ? `
  <div class="size-buttons">
    <div class="size-container">
      ${sizesHTML}
    </div>
  </div>
  ` : ''}
        <div class="page-buttons">
          <button class="buttonz" onclick="goToPrevProduct()">Prev</button>
          <button class="buttonz" onclick="goToNextProduct()">Next</button>
        </div>
      `;
    }
  
  
  // Function to load product image
  
function loadProductImage(image) {
  const mainImage = document.getElementById("main-image");
  mainImage.src = image;
}

  
// Function to go to the previous product
function goToPrevProduct() {
  if (currentItemIndex > 0) {
    currentItemIndex--;
    selectedItem = clothingItems[currentItemIndex];
    selectedSize = null;
    renderProductItem();
  }
}

// Function to go to the next product
function goToNextProduct() {
  if (currentItemIndex < clothingItems.length - 1) {
    currentItemIndex++;
    selectedItem = clothingItems[currentItemIndex];
    selectedSize = null;
    renderProductItem();
  }
}
  
  // Function to render the product item
  function renderProductItem() {
    const productContainer = document.getElementById("product-container");
    productContainer.innerHTML = generateProductItem(clothingItems[currentItemIndex]);
  
    // Update indicator
    const indicator = document.getElementById('item-indicator');
    indicator.textContent = `${currentItemIndex + 1}/${clothingItems.length}`;
  }
  
  // Function to update the cart total price
function updateCartTotal() {
  const cartTotalPrice = document.getElementById('cart-total-price');
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  cartTotalPrice.textContent = `$${totalPrice}`;
}

// Initial render
selectedItem = clothingItems[currentItemIndex];
renderProductItem();





//purchase

function selectSize(sizeButton) {
  // Remove 'selected' class from all size buttons
  const sizeButtons = document.getElementsByClassName('size-button');
  for (let i = 0; i < sizeButtons.length; i++) {
    sizeButtons[i].classList.remove('selected');
  }

  // Add 'selected' class to the clicked size button
  sizeButton.classList.add('selected');

  selectedSize = sizeButton.textContent;
}



  


  // Function to buy now
  /*
function buyNow() {
  if (selectedItem && selectedSize) {
    const cartItem = {
      name: selectedItem.name,
      price: selectedItem.price,
      size: selectedSize,
    };

    cartItems.push(cartItem);
    updateCartTotal();
    console.log("Buy now:", cartItems);
    // Redirect to the checkout page or perform any other desired action
  }
}
  */

function buyNow() {
  if (selectedItem) {
    if (selectedItem.sizes && selectedItem.sizes.length > 0) {
      if (!selectedSize) {
        return; // Size is required, so exit if no size is selected
      }
      selectedItem.selectedSize = selectedSize;
    }

    cartItems.push(selectedItem);
    updateCartOverlay();
    openCartOverlay();
  }
}




 // Function to add the selected item to the cart
 function addToCart() {
  if (selectedItem) {
    if (selectedItem.sizes && selectedItem.sizes.length > 0) {
      if (!selectedSize) {
        return; // Size is required, so exit if no size is selected
      }
      selectedItem.selectedSize = selectedSize;
    }

    cartItems.push(selectedItem);
    updateCartOverlay();
  }
}


// Function to generate cart item HTML
function generateCartItemHTML(selectedItem, index) {
  let sizeHTML = '';
  if (selectedItem.selectedSize) {
    sizeHTML = `<div class="cart-item-size">Size: ${selectedItem.selectedSize}</div>`;
  }

  return `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${selectedItem.images[0]}" alt="${selectedItem.name}">
      </div>
      <div class="cart-item-details">
        <div class="cart-item-name">${selectedItem.name}</div>
        ${sizeHTML}
        <div class="cart-item-price">$${selectedItem.price}</div>
      </div>
      <div class="cart-item-remove">
        <button class="remove-button" onclick="removeFromCart(${index})">Remove</button>
      </div>
    </div>
  `;
}




// Function to update the cart overlay
function updateCartOverlay() {
  // Generate HTML for all cart items
  const cartItemsHTML = cartItems
    .map((item, index) => generateCartItemHTML(item, index))
    .join("");

  // Insert the HTML into the cart items container
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = cartItemsHTML;

  // Calculate and update the total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalPriceElement = document.getElementById('cart-total-price');
  totalPriceElement.textContent = `$${totalPrice}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartOverlay();
}


  

//cart


