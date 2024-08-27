// src/service/CustomerService.js
export const CustomerService = {
    getCustomersMedium: async () => {
      return [
        {
          id: 1,
          name: "James Butt",
          country: {
            name: "USA",
            code: "US",
          },
          company: "Benton, John B Jr",
          representative: {
            name: "Ioni Bowcher",
            image: "ionibowcher.png",
          },
        },
        {
          id: 2,
          name: "Josephine Darakjy",
          country: {
            name: "Germany",
            code: "DE",
          },
          company: "Chanay, Jeffrey A Esq",
          representative: {
            name: "Amy Elsner",
            image: "amyelsner.png",
          },
        },
        {
          id: 3,
          name: "Art Venere",
          country: {
            name: "France",
            code: "FR",
          },
          company: "Chemel, James L Cpa",
          representative: {
            name: "Asiya Javayant",
            image: "asiyajavayant.png",
          },
        },
        // Agrega más clientes aquí
      ];
    },
  };
  