const BASE_URL = 'https://fakestoreapi.com/products';

const productApi = {
  fetchAll: async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },
  fetchById: async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) throw new Error('Failed to fetch product');
    return response.json();
  },
};

export default productApi;
