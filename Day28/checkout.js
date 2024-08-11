document.querySelector('.checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const shippingInfo = {
        name: e.target[0].value,
        address: e.target[1].value,
        city: e.target[2].value,
        state: e.target[3].value,
        postalCode: e.target[4].value,
        country: e.target[5].value,
    };

    const paymentInfo = {
        cardNumber: e.target[6].value,
        cardholderName: e.target[7].value,
        expirationDate: e.target[8].value,
        cvv: e.target[9].value,
    };

    const order = {
        cart: JSON.parse(localStorage.getItem('cart')),
        shippingInfo,
        paymentInfo,
        orderTotal: document.querySelector('.total').textContent,
    };

    console.log('Order Placed:', order);

    // Clear the cart after order placement
    localStorage.removeItem('cart');
    alert('Order placed successfully!');
    window.location.href = 'index.html';
});
