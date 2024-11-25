angular.module("MyApp", []).controller("ProductController", function () {
  this.products = [
    {
      id: 1,
      name: "Mechanical Keyboard",
      description: "Dengan tombol responsif dan memakai blue switch.",
      price: 100.99,
      stars: 5,
      image: "images/keyboard1.jpg",
    },
    {
      id: 2,
      name: "Wireless Mouse",
      description: "Desain yang ergonomis membuat tangan tidak lelah.",
      price: 100.99,
      stars: 5,
      image: "images/mouse1.jpg",
    },
    {
      id: 3,
      name: "Gaming Headset",
      description: "Dilengkapi suara surround yang imersif dan bantalan empuk.",
      price: 100.99,
      stars: 5,
      image: "images/headset1.jpg",
    },
    {
      id: 4,
      name: "Monitor",
      description: "Monitor ini dilengkapi resolusi tinggi dan fitur eye-care.",
      price: 100.99,
      stars: 5,
      image: "images/monitor1.jpg",
    },
    {
      id: 5,
      name: "Laptop",
      description: "Dirancang untuk produktivitas dengan prosesor cepat.",
      price: 100.99,
      stars: 5,
      image: "images/laptop1.jpg",
    },
    {
      id: 6,
      name: "Wired Mouse",
      description:
        "Kabel yang fleksibel memberikan koneksi langsung tanpa gangguan, Sangat cocok saat sedang berkerja.",
      price: 100.99,
      stars: 5,
      image: "images/mouse2.jpg",
    },
    {
      id: 7,
      name: "Earphone",
      description: "Dengan suara yang seimbang dan bass yang mantap.",
      price: 100.99,
      stars: 5,
      image: "images/earphone1.jpg",
    },
    {
      id: 8,
      name: "Magic Keyboard",
      description:
        "Memberikan pengalaman mengetik yang lebih nyaman dan responsif.",
      price: 100.99,
      stars: 5,
      image: "images/keyboard2.jpg",
    },
    {
      id: 9,
      name: "Usb Cable",
      description:
        "Memberikan koneksi yang cepat dan stabil antara perangkat Anda.",
      price: 100.99,
      stars: 5,
      image: "images/kabel1.jpg",
    },
    {
      id: 10,
      name: "Speaker",
      description:
        "Dirancang untuk memberikan suara jernih dan bass yang dalam, Speaker ini menawarkan kualitas suara yang optimal, baik untuk musik, film, maupun gaming.",
      price: 100.99,
      stars: 5,
      image: "images/speaker1.jpg",
    },
  ];

  this.cart = [];

  this.addToCart = function (product) {
    const existingProduct = this.cart.find((item) => item.id === product.id);

    if (existingProduct) {
      alert(product.name + " sudah ada di keranjang!");
    } else {
      this.cart.push(product);
      alert(product.name + " berhasil ditambahkan ke keranjang!");
    }
  };

  this.removeFromCart = function (product) {
    const index = this.cart.indexOf(product);
    if (index !== -1) {
      this.cart.splice(index, 1);
      alert(product.name + " berhasil dihapus dari keranjang!");
    }
  };

  this.calculateTotal = function () {
    return this.cart.reduce((total, item) => total + item.price, 0);
  };

  this.buyItems = function () {
    if (this.cart.length === 0) {
      alert("Your cart is empty!");
    } else {
      alert("Thank you for your purchase! Total: " + this.calculateTotal());
      this.cart = [];
    }
  };
});
