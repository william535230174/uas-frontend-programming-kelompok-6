angular.module("MyApp", []).controller("ProductController", function ($http) {
  const ctrl = this;

  ctrl.products = [];
  ctrl.cart = JSON.parse(localStorage.getItem("cart")) || [];

  $http.get("products.json").then(function (response) {
    ctrl.products = response.data;
  });

  ctrl.addToCart = function (product) {
    const existingProduct = ctrl.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      alert(product.name + " sudah ada di keranjang!");
    } else {
      ctrl.cart.push(product);
      alert(product.name + " berhasil ditambahkan ke keranjang!");
      localStorage.setItem("cart", JSON.stringify(ctrl.cart));
    }
  };

  ctrl.removeFromCart = function (product) {
    const index = ctrl.cart.indexOf(product);
    if (index !== -1) {
      ctrl.cart.splice(index, 1);
      alert(product.name + " berhasil dihapus dari keranjang!");
      localStorage.setItem("cart", JSON.stringify(ctrl.cart));
    }
  };

  ctrl.calculateTotal = function () {
    return ctrl.cart.reduce((total, item) => total + item.price, 0);
  };

  ctrl.buyItems = function () {
    if (ctrl.cart.length === 0) {
      alert("Keranjang Anda kosong!");
    } else {
      alert(
        "Terima kasih atas pembelian Anda! Total: " + ctrl.calculateTotal()
      );
      ctrl.cart = [];
      localStorage.removeItem("cart");
    }
  };
});
