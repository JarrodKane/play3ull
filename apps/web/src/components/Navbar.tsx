'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';

export function Navbar(): JSX.Element {
  const { totalAmount } = useContext(CartContext);

  return (
    <nav className='bg-purple-800 shadow-md shadow-slate-800'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link href='/'>Play3ull</Link>
        <div className='flex gap-x-5'>
          {/* TODO: Account sign-in sing-out */}
          {/* <Link href='/account'>Account</Link> */}
          <Link href='/cart'>Cart</Link>
          <div>${totalAmount}</div>
        </div>
      </div>
    </nav>
  );
}
