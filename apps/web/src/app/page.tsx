'use client';

import { useQuery } from '@apollo/client';
import { Card } from '@repo/ui/components';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';
import type { GetProductsQuery } from '../gql/graphql';
import { CartContext } from '../providers/CartProvider';
import { GET_PRODUCTS } from '../queries/get-products';

export default function Page(): JSX.Element {
  const { data, loading, error } = useQuery<GetProductsQuery>(GET_PRODUCTS);
  const { addToCart, setProducts } = useContext(CartContext);

  useEffect(() => {
    if (data) {
      setProducts(data.products);
    }
  }, [data]);

  // TODO: Deal with loading state
  if (loading) {
    return <div>Loading</div>;
  }

  // TODO: Create default error page
  if (error) {
    return <div>Default Error</div>;
  }

  // TODO: SEO component that takes in the data given, in order to create a default meta data for each page

  // TODO: Debounce and disable
  const handleOnClickCardAdd = (id: number, price: number): void => {
    addToCart(id, price);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='mb-32 grid gap-8 text-center lg:mb-0 lg:w-full lg:max-w-7xl lg:grid-cols-3 lg:text-left'>
        {data?.products.map((product) => (
          <Card
            image={
              <Link href={`product/${product.id}`}>
                <Image
                  alt='Vercel Logo'
                  height={100}
                  objectFit='cover'
                  priority
                  src={product.image}
                  width={100}
                />
              </Link>
            }
            key={product.id}
            onclick={() => {
              handleOnClickCardAdd(product.id, product.price);
            }}
            price={product.price}
            title={
              <Link
                className='ui-mb-3 ui-text-2xl ui-font-semibold'
                href={`product/${product.id}`}
              >
                {product.title}
                <span className='ui-inline-block ui-transition-transform group-hover:ui-translate-x-1 motion-reduce:ui-transform-none'>
                  -&gt;
                </span>
              </Link>
            }
          >
            {product.description}
          </Card>
        ))}
      </div>
    </main>
  );
}
