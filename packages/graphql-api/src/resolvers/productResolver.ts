import { Product } from '../generated/graphql';
import { fakeStoreApiBaseUrl } from '../constants/fakestoreapi.js';

// TODO: We could grab the items, and then store them in local db or cache it
//  That way we can add in pagination, as well with reducing the amount of 3rd party api hits

export const productResolver = {
  Query: {
    product: async (_: any, { id }: { id: string }): Promise<Product> => {
      try {
        const response = await fetch(`${fakeStoreApiBaseUrl}/products/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = (await response.json()) as Product;
        return data;
      } catch (error) {
        throw new Error(`Unable to fetch product: ${error}`);
      }
    },
    products: async (): Promise<Product[]> => {
      try {
        const response = await fetch(`${fakeStoreApiBaseUrl}/products`);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = (await response.json()) as Product[];
        return data;
      } catch (error) {
        throw new Error(`Unable to fetch products: ${error}`);
      }
    },
  },
};
