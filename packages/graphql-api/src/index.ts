import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { productResolver } from './resolvers/productResolver.js';
import { productSchema } from './schemas/productSchema.js';
// TODO: Remove need to manually add .js on imports

export const typeDefs = [productSchema].join('\n');

export const resolvers = {
  Query: {
    ...productResolver.Query,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
