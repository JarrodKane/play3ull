import { productResolver } from './productResolver';

export const resolvers = {
  Query: {
    ...productResolver.Query,
  },
};
