window.onload = function () {
    let slides = document.getElementsByClassName('carousel-item');

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 350, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 350, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 1500);
};

function renderMobileData(data) {
    let items = document.querySelector(".product-items");
    items.innerHTML = ''; // Clear existing content

    data.map((item, index) => {
        const mobileItem = document.createElement('div');
        mobileItem.className = 'mobile-item';
        mobileItem.innerHTML = `
            <img src="${item.image_url}" alt="${item.name}" />
            <h3 class="item name">${item.name}</h3>
            <p class="item price">Rs.₹ ${item.price}</p>
            <p class="item desc">${item.description}</p>
            <button class="add-to-cart" data-id="${index}">Add to Cart</button>
            <div class="quantity-controls" data-id="${index}" style="display: none;">
                <button class="decrease-qty">-</button>
                <span class="item-qty">1</span>
                <button class="increase-qty">+</button>
            </div>
        `;
        items.appendChild(mobileItem);
    });
}

let mobileData = [];
let cart = [];
const cartCountElement = document.querySelector('.cart-count');

function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

function updateItemQuantity(itemId, change) {
    const itemInCart = cart.find(item => item.index == itemId);
    
    if (itemInCart) {
        itemInCart.quantity += change;
        
        if (itemInCart.quantity <= 0) {
            cart = cart.filter(item => item.index != itemId); 
        }
    } else if (change > 0) {
        const item = mobileData[itemId];
        cart.push({...item, index: itemId, quantity: 1}); 
    }

    console.log("czart: ",cart)
    localStorage.setItem("cart",JSON.stringify(cart))
    
    updateCartCount();
    renderMobileData(mobileData); // Re-render to update quantity display
}

document.addEventListener('click', function (e) {
    const itemId = e.target.closest('[data-id]')?.getAttribute('data-id');

    if (e.target.classList.contains('add-to-cart')) {
        updateItemQuantity(itemId, 1);
    }
});

fetch("./products.json")
    .then((response) => response.json())
    .then((data) => {
        mobileData.push(...data); // Spread operator to push all items into mobileData
        renderMobileData(mobileData); // Render items
    })
    .catch((error) => console.error('Error loading JSON:', error));




