import { Product } from '../generated/graphql';
import { fakeStoreApiBaseUrl } from '../constants/fakestoreapi.js';

// We could take this into a const file but for now it's only being used in one spot
const LIMIT = 15;

// TODO: We could grab the items, and then store them in local db or cache it
//  That way we can add in pagination, as well with reducing the amount of 3rd party api hits

export const productResolver = {
  Query: {
    product: async (id: number): Promise<Product> => {
      try {
        const response = await fetch(`${fakeStoreApiBaseUrl}/product/${id}`);

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
        const response = await fetch(
          `${fakeStoreApiBaseUrl}/products?limit=${LIMIT}`
        );

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
