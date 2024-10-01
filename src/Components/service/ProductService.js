// src/service/ProductService.js
export const ProductService = {
    getProducts: async () => {
      return [
        {
          id: "1000",
          name: "Bidón 20Lt",
          image: "https://i.postimg.cc/8kngNs68/Bidon.jpg",
          price: 20,
          category: "Accessories",
          rating: 5,
          inventoryStatus: "INSTOCK",
        },
        {
          id: "1001",
          name: "Botellón 7Lt",
          image: "https://i.postimg.cc/zBX411DX/Botellon.jpg",
          price: 18,
          category: "Accessories",
          rating: 4,
          inventoryStatus: "LOWSTOCK",
        },
        {
          id: "1002",
          name: "Caja 20Lt",
          image: "https://i.postimg.cc/MHn4vbjC/Caja.jpg",
          price: 21,
          category: "Fitness",
          rating: 3,
          inventoryStatus: "OUTOFSTOCK",
        },
        
        // Agrega más productos aquí
      ];
    },
  };
  