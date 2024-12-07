import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//  TODO: Move schemas into own folder
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Product {
    id: String
    title: String
    category: String
    image: String
  }

  type Query {
    products: [Product]
  }
`;

// TODO: Move Resolvers into own folder
const resolvers = {
  Query: {
    products: async () => {
      // TODO: Remove hard codded limit
      const response = await fetch(
        'https://fakestoreapi.com/products?limit=12'
      );
      return response.json();
    },
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
