import { Product } from '../generated/graphql';

export const productResolver = {
  Query: {
    products: async (): Promise<Product[]> => {
      // TODO: Error handling is needed
      const response = await fetch(
        // TODO: Remove hard codded limit
        'https://fakestoreapi.com/products?limit=12'
      );

      const data = (await response.json()) as Product[];
      return data;
    },
  },
};
