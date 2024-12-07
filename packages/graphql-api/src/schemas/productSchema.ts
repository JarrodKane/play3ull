export const productSchema = `#graphql
  type Product {
    id: String!
    title: String!
    price: Float!
    description: String!
    category: String!
    image: String!
  }
  

  type Query {
    product(id: String!): Product!
    products: [Product!]!
  }
`;
