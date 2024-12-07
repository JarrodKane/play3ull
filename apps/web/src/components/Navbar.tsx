'use client';

import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../providers/CartProvider';

// This component in its current state does not make much sense to have in the packages/UI
// TODO: Make this nav more reusable with colors etc, as well as rename left/right
export function Navbar(): JSX.Element {
  const { totalAmount } = useContext(CartContext);

  return (
    <nav className='ui-bg-purple-800 ui-shadow-md ui-shadow-slate-800'>
      <div className='ui-max-w-screen-xl ui-flex ui-flex-wrap ui-items-center ui-justify-between ui-mx-auto ui-p-4'>
        <h1>Play3ull</h1>
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
