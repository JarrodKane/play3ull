'use client';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import type { ReactNode } from 'react';

// TODO: Add next Env vars
export function CustomApolloProvider({ children }: { children: ReactNode }) {
  const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
