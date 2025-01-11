// wishlist.js

// Function to display a message when "Add wishlist" is clicked
function addToWishlist(bookName) {
    alert(bookName + " has been added to your wishlist!");
}

// Attach event listeners to all "Add wishlist" buttons
document.addEventListener("DOMContentLoaded", function () {
    const wishlistButtons = document.querySelectorAll(".add-to-cart");

    wishlistButtons.forEach(button => {
        button.addEventListener("click", function () {
            const bookName = this.getAttribute("data-book");
            addToWishlist(bookName);
        });
    });
});
