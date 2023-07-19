const db = {
  products: [
    { id: 1, title: "tomato" },
    { id: 2, title: "apple" },
    { id: 3, title: "pear" },
  ],
};

export const productsRepository = {
  findproducts(title: string | null | undefined) {
    if (title) {
      const product = db.products.find((item) => item.title === title);

      return product;
    }
    return db.products;
  },

  findproductsById(productId: string) {
    const id = Number(productId);
    const product = db.products.find((product) => product.id === id);

    return product;
  },
};
