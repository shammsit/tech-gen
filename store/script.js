// Load Products From JSON

let products = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productGrid = document.getElementById("store-productGrid");

fetch("products.json")
.then(response => response.json())
.then(data => {
    products = data;
    displayProducts(products);
});

function displayProducts(productList){

    productGrid.innerHTML = "";

    productList.forEach(product => {

        productGrid.innerHTML += `

        <div class="store-product-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="store-product-info">

                <h3>${product.name}</h3>

                <div class="store-rating">
                    ⭐⭐⭐⭐⭐
                </div>

                <div class="store-price">

                    ₹${product.price}

                    <span class="store-old-price">
                    ₹${product.mrp}
                    </span>

                </div>

                <p class="store-desc">
                    ${product.description}
                </p>

                <div class="store-btn-group">

                    <button
                    class="store-btn store-details-btn"
                    onclick="viewProduct(${product.id})">

                    View Details

                    </button>

                    <button
                    class="store-btn store-cart-btn"
                    onclick="addToCart(${product.id})">

                    Add to Cart

                    </button>

                    <button
                    class="store-btn store-buy-btn"
                    onclick="buyNow(${product.id})">

                    Buy Now

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

// View Product

function viewProduct(id){

    window.location.href =
    "product.html?id="+id;

}

// Add Cart

function addToCart(id){

    const product =
    products.find(p=>p.id===id);

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    alert(product.name+" added to cart.");

}

// Buy Now

function buyNow(id){

    const product =
    products.find(p=>p.id===id);

    localStorage.setItem(
        "buyNow",
        JSON.stringify(product)
    );

    window.location.href =
    "checkout.html";

}
function addCart(id){

    const product = products.find(p => p.id == id);

    cart.push(product);

    localStorage.setItem("cart",JSON.stringify(cart));

    alert(product.name + " added to cart.");

}
function viewProduct(id){

    window.location.href =
    "product.html?id=" + id;

}