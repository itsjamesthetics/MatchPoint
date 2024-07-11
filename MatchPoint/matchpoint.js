
document.addEventListener('DOMContentLoaded', function() {

    var typed = new Typed(".text", {
        strings: ["Tech", "Business", "Retail", "Healthcare", "Education", "Entertainment", "Sports"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

function toggleMenu() {
    var subMenu = document.getElementById('subMenu');
    subMenu.classList.toggle('open-menu');
}

//PRODUCT LIST
const products = [
    { id: 1, name: 'Pop Corn', price: 10, quantity: 5, image: 'popcorn.png' },
    { id: 2, name: 'Corn Dog', price: 15, quantity: 4, image: 'corndog.png' },
    { id: 3, name: 'French Fries', price: 20, quantity: 6, image: 'fries.png' }
];

const images = [
    'popcorn.png',
    'corndog.png',
    'fries.png'
];

const productList = document.getElementById('product-list');

productList.innerHTML = '';

images.forEach(imageSrc => {
    const image = document.createElement('img');
    image.src = imageSrc;
    image.alt = 'Product Image';
    productList.appendChild(image);
});

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Quantity: ${product.quantity}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productElement);
    });
}

function addToCart(productId) {
    const product = products.find(product => product.id === productId);
    if (product.quantity > 0) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        product.quantity--;
        displayProducts();
        displayCart();
    }
}

function displayCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '<h2>Cart</h2>';
    cart.forEach(item => {
        cartElement.innerHTML += `
            <p>${item.name} - Quantity: ${item.quantity}</p>
        `;
    });
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    cartElement.innerHTML += `<p>Total: $${total}</p>`;
}

displayProducts();


//ADDITIONAL Code
document.getElementById('cancelButton').addEventListener('click', function() {
    const isConfirmed = confirm('Are you sure you want to cancel?');
    if (isConfirmed) {
        cart = []; // Clears the cart
        displayCart(); // Updates the cart display
    }
});

document.getElementById('checkoutButton').addEventListener('click', function() {
    // Hide the Cancel and Checkout buttons
    document.getElementById('cancelButton').style.display = 'none';
    document.getElementById('checkoutButton').style.display = 'none';

    // Display the checkout form
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.innerHTML = `
        <h3>Checkout</h3>
        <input type="text" id="fullname" placeholder="Full Name" required>
        <input type="text" id="contactNumber" placeholder="Contact Number" required>
        <input type="text" id="address" placeholder="Full Address" required>
        <input type="email" id="email" placeholder="Valid Email Address" required>
        <button onclick="submitCheckout()">Submit Order</button>
    `;
    checkoutForm.style.display = 'block';
});

function submitCheckout() {
    const fullname = document.getElementById('fullname').value.trim();
    const contactNumber = document.getElementById('contactNumber').value.trim();
    const address = document.getElementById('address').value.trim();
    const email = document.getElementById('email').value.trim();

    // Simple validation (in a real app, you'd want more robust validation)
    if (!fullname || /[^a-zA-Z -]/.test(fullname)) {
        alert('Please enter a valid name.');
        return;
    }
    else if (!fullname || !contactNumber || !address || !email) {
        alert('Please fill in all fields.');
        return;
    }
    else if (cart.length == 0) {
        alert('Your cart is empty. Please add items to your cart before checking out.');
        return; // Stop the function if the cart is empty
    }
    else if (!/^\d+$/.test(contactNumber)) {
        alert('Please enter a valid contact number.');
        return;
    }
    else if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Process the checkout here (e.g., send data to a server)
    console.log('Checkout Details:', { fullname, contactNumber, address, email });
    alert('Ordered Successfully!');

    // Reset the cart and checkout form
    cart = [];
    displayCart();
    document.getElementById('checkoutForm').style.display = 'none';
    document.getElementById('checkoutForm').innerHTML = '';
    // Show the Cancel and Checkout buttons again
    document.getElementById('cancelButton').style.display = 'inline-block';
    document.getElementById('checkoutButton').style.display = 'inline-block';
}


function gradeEvaluation (gradeMark, isFinalExam) {

    //let passingGrade as boolean
    let passingGrade = false;

    //gradeMark converted in int, in case if its string
    gradeMark = Number(gradeMark);

    //Condition
    if (isFinalExam) {
        //For a final exam, require gradeMark to be 90 or greater for an A+ grade
        if (gradeMark >= 90) passingGrade = true;
        console.log("A+ Grade");
    }
    else {
        //For non-final exams, gradeMark between 89 and 100 inclusive result in an A+ grade
        if (gradeMark >= 89 && gradeMark <= 100) passingGrade = true;
    }
    return passingGrade;
}

//Assumed Grade Mark
let gradeMark = 92;
//Final Exam Quarter
let isFinalExam = true; 

//Evaluation
let gradeResult = gradeEvaluation (gradeMark, isFinalExam);
console.log(gradeResult ? "True (A+ Grade)" : "False (Not A+ Grade)");
