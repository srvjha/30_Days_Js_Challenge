window.onload = function () {
    let slides = 
        document.getElementsByClassName('carousel-item');

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




let mobileData = [];
let cart = [];
const cartCountElement = document.querySelector('.cart-count');

function updateCartCount() {
    cartCountElement.textContent = cart.length;
}

function renderMobileData(data) {
    let items = document.querySelector(".product-items");
    items.innerHTML = ''; // Clear existing content

    data.map((item,index) => {
        const mobileItem = document.createElement('div');
        mobileItem.className = 'mobile-item';
        mobileItem.innerHTML = `
             <img src="${item.image_url}" alt="${item.name}" />
            <h3 class="item name">${item.name}</h3>
            <p class="item price">Rs.₹ ${item.price}</p>
            <p class="item desc">${item.description}</p>
            <button class="add-to-cart" data-id="${index}">Add to Cart</button>
           
        `;
        items.appendChild(mobileItem);
    });
}

document.addEventListener('click', function (e) {
    if (e.target.classList.contains('add-to-cart')) {
        const itemId = e.target.getAttribute('data-id');
        const item = mobileData.find(item => item.id === itemId);
        
        if (item) {
            cart.push(item);
            updateCartCount();
        }
        console.log(item)
    }
});

fetch("./products.json")
.then((response)=> response.json())
.then((data)=>{
    mobileData.push(...data);  // Spread operator to push all items into mobileData
    renderMobileData(mobileData);   // This will correctly log the populated array
  })
.catch((error) => console.error('Error loading JSON:', error));

