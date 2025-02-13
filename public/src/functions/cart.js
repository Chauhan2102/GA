// purchase.js
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const bookName = e.target.dataset.book;
            const price = parseFloat(e.target.dataset.price);
            const quantityInput = e.target.previousElementSibling;
            const quantity = parseInt(quantityInput.value);

            const cartItem = document.createElement('li');
            cartItem.textContent = `${bookName} (x${quantity}) - $${(price * quantity).toFixed(2)}`;
            cartItems.appendChild(cartItem);

            // Update total price
            totalPrice += price * quantity;
            totalPriceElement.textContent = totalPrice.toFixed(2);
        });
    });

    document.getElementById('checkout-btn').addEventListener('click', () => {
        // Show the alert with the total price
        alert(`Your total is $${totalPrice.toFixed(2)}. Proceed to checkout.`);

        // After the alert, redirect to the thankyou page
        document.getElementById('checkout-link').click();
    });
});