angular
  .module("electronicApp", [])
  .controller("ProductController", function () {
    this.products = [
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
      {
        name: "Mechanical Keyboard",
        description: "Menggunakan Blue Swicth.",
        price: 100.99,
        stars: [1, 1, 1, 1, 1],
        image: "images/keyboard1.jpg",
      },
    ];

    this.addToCart = function (product) {
      alert(product.name + " masuk keranjang!");
    };
  });
