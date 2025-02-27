// scripts.js
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.btn-secondary');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            alert("Item added to cart!");
            // You can later expand this to actually add items to a shopping cart.
        });
    });
});
