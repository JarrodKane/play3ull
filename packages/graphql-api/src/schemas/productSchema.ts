export const productSchema = `#graphql
  type Product {
    id: String
    title: String
    description: String
    category: String
    image: String
  }

  type Query {
    products: [Product]
  }
`;
