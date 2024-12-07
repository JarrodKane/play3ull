export const productSchema = `#graphql
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
