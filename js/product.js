myApp.controller("ProductController", function ($http, $routeParams) {
  const ctrl = this;

  ctrl.products = [];
  ctrl.filteredProducts = [];
  ctrl.query = "";
  ctrl.cart = JSON.parse(localStorage.getItem("cart")) || [];
  ctrl.wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  const categoryFilter = $routeParams.category || "";

  $http.get("/json/products.json").then(
    function (response) {
      ctrl.products = response.data;

      ctrl.filteredProducts = ctrl.products.filter((product) =>
        categoryFilter ? product.category === categoryFilter : true
      );
    },
    function (error) {
      console.error("Error loading products.json:", error);
    }
  );

  ctrl.handleEnter = function (event) {
    if (event.keyCode === 13) {
      ctrl.query = ctrl.query.trim();
    }
  };

  ctrl.getFilteredProducts = function () {
    return ctrl.filteredProducts.filter((product) =>
      ctrl.query
        ? product.name.toLowerCase().includes(ctrl.query.toLowerCase())
        : true
    );
  };

  ctrl.formatCurrency = function (amount) {
    if (!amount || isNaN(amount)) {
      amount = 0;
    }
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    })
      .format(amount)
      .replace("Rp", "IDR");
  };

  ctrl.addToCart = function (product) {
    const existingProduct = ctrl.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      alert(product.name + " sudah ada di keranjang!");
    } else {
      ctrl.cart.push({ ...product, quantity: 1 });
      alert(product.name + " berhasil ditambahkan ke keranjang!");
      localStorage.setItem("cart", JSON.stringify(ctrl.cart));
    }
  };

  ctrl.addToWishlist = function (product) {
    const existingProduct = ctrl.wishlist.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      alert(product.name + " sudah ada di wishlist!");
    } else {
      ctrl.wishlist.push(product);
      alert(product.name + " berhasil ditambahkan ke wishlist!");
      localStorage.setItem("wishlist", JSON.stringify(ctrl.wishlist));
    }
  };

  ctrl.removeFromWishlist = function (product) {
    ctrl.wishlist = ctrl.wishlist.filter((item) => item.id !== product.id);
    localStorage.setItem("wishlist", JSON.stringify(ctrl.wishlist));
  };
});
