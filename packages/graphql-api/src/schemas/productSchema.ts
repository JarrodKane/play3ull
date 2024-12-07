export const productSchema = `#graphql
  type Product {
    id: Int!
    title: String!
    price: Int!
    description: String!
    category: String!
    image: String!
  }
  

  type Query {
    product(id: Int!): Product!
    products: [Product!]!
  }
`;
