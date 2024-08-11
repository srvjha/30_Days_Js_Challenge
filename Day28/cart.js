// cart.js

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items');
    const subtotalElement = document.querySelector('.subtotal');
    const totalElement = document.querySelector('.total');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart)

    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const cartItem = `
                <div class="cart-item">
                    <img src="${item.image_url}" alt="${item.name}" />
                    <div class="item-details">
                        <h4>${item.name}</h4>
                        <p class="item-price">₹${item.price}</p>
                        <div class="quantity-controls">
                            <button class="decrease" data-index="${index}">-</button>
                            <span class="item-qty">${item.quantity}</span>
                            <button class="increase" data-index="${index}">+</button>
                        </div>
                        <p class="item-total">₹${itemTotal}</p>
                        <button class="remove-item" data-index="${index}">Remove</button>
                    </div>
                </div>
            `;

            cartItemsContainer.insertAdjacentHTML('beforeend', cartItem);
        });

        subtotalElement.textContent = `₹${subtotal}`;
        totalElement.textContent = `₹${subtotal}`;
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('increase')) {
            const index = e.target.dataset.index;
            cart[index].quantity++;
            saveCart();
            updateCartUI();
        } else if (e.target.classList.contains('decrease')) {
            const index = e.target.dataset.index;
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                saveCart();
                updateCartUI();
            }
        } else if (e.target.classList.contains('remove-item')) {
            const index = e.target.dataset.index;
            cart.splice(index, 1);
            saveCart();
            updateCartUI();
        }
    });

    updateCartUI();
});
