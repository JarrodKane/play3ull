'use client';

import { useQuery } from '@apollo/client';
import { Card } from '@repo/ui/components';
import Image from 'next/image';
import type { GetProductsQuery } from '../gql/graphql';
import { GET_PRODUCTS } from '../queries/get-products';

export default function Page(): JSX.Element {
  const { data, loading, error } = useQuery<GetProductsQuery>(GET_PRODUCTS);

  // TODO: Deal with loading state
  if (loading) {
    return <div>Loading</div>;
  }

  // TODO: Create default error page
  if (error) {
    return <div>Default Error</div>;
  }

  // TODO: SEO component that takes in the data given, in order to create a default meta data for each page

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-7xl lg:grid-cols-3 lg:text-left'>
        {data?.products.map((product) => (
          <Card
            href={`product/${product.id}`}
            image={
              <Image
                alt='Vercel Logo'
                height={24}
                priority
                src={product.image}
                width={100}
              />
            }
            key={product.id}
            price={product.price}
            title={product.title}
          >
            {product.description}
          </Card>
        ))}
      </div>
    </main>
  );
}
