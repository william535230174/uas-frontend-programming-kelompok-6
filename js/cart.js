function displayCart() { 
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let cartTableBody = document.querySelector('.cart table tbody'); 

    cartTableBody.innerHTML = ''; 

    cart.forEach(item => {
        console.log("Image path:", `product/${item.image}`); 
        let row = `
            <tr>
                <td>
                    <div class="cart-info">
                        <img src="${item.image}" alt="product-image" style="width: 100px;">
                        <div>
                            <p>${item.name}</p>
                            <a href="javascript:void(0);" onclick="removeFromCart('${item.name}')">REMOVE</a>
                        </div>
                    </div>
                </td>
                <td>${formatCurrency(item.price)}</td>
                <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)"></td>
                <td>${formatCurrency(item.price * item.quantity)}</td>
            </tr>
        `; 
        cartTableBody.innerHTML += row;
    });

    calculateTotal(); 
}

function calculateTotal() { 
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let subtotal = 0; 

    cart.forEach(item => {
        subtotal += item.price * item.quantity; 
    });

    // Shipping fee tetap Rp10.000 jika ada barang, Rp0 jika tidak ada
    let shippingFee = cart.length > 0 ? 10000 : 0; 
    let tax = subtotal * 0.1; 
    let totalPayment = subtotal + tax + shippingFee; 

    document.querySelector('.total-price table').innerHTML = `
        <tr>
            <td>Subtotal</td>
            <td>${formatCurrency(subtotal)}</td>
        </tr>
        <tr>
            <td>Tax</td>
            <td>${formatCurrency(tax)}</td>
        </tr>
        <tr>
            <td>Shipping Fee</td>
            <td>${formatCurrency(shippingFee)}</td>
        </tr>
        <tr>
            <td>Payment</td>
            <td>${formatCurrency(totalPayment)}</td>
        </tr>
    `;
}

function formatCurrency(amount) { 
    return new Intl.NumberFormat('id-ID', {
        style: "currency", 
        currency: "IDR", 
        minimumFractionDigits: 0 
    }).format(amount).replace('Rp', 'IDR'); 
}

function formatCurrency(amount) { 
    return new Intl.NumberFormat('id-ID', {
        style: "currency", 
        currency: "IDR", 
        minimumFractionDigits: 0 
    }).format(amount).replace('Rp', 'IDR'); 
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart(); 
}

function updateQuantity(productName, newQuantity) { 
    let cart = JSON.parse(localStorage.getItem('cart')) || []; 
    let productIndex = cart.findIndex(item => item.name === productName); 

    if (productIndex > -1) { 
        cart[productIndex].quantity = parseInt(newQuantity); 
        localStorage.setItem('cart', JSON.stringify(cart)); 
        displayCart(); 
    }
}

window.onload = displayCart; 