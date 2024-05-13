document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var quantity = document.getElementById("quantity").value;
    document.getElementById("order-status").innerText = "Thank you, " + name + "! Your order for " + quantity + " special cocktails has been placed. We will deliver them to " + address + ". An email confirmation will be sent to " + email + ".";
});
