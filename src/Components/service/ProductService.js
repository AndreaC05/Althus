// src/service/ProductService.js
export const ProductService = {
    getProducts: async () => {
      return [
        {
          id: "1000",
          name: "Bamboo Watch",
          image: "bamboo-watch.jpg",
          price: 65,
          category: "Accessories",
          rating: 5,
          inventoryStatus: "INSTOCK",
        },
        {
          id: "1001",
          name: "Black Watch",
          image: "black-watch.jpg",
          price: 72,
          category: "Accessories",
          rating: 4,
          inventoryStatus: "LOWSTOCK",
        },
        {
          id: "1002",
          name: "Blue Band",
          image: "blue-band.jpg",
          price: 79,
          category: "Fitness",
          rating: 3,
          inventoryStatus: "OUTOFSTOCK",
        },
        
        // Agrega más productos aquí
      ];
    },
  };
  