const BASE_URL = 'https://fakestoreapi.com/products/categories';

const categoryApi = {
  fetchAll: async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  },
};

export default categoryApi;
