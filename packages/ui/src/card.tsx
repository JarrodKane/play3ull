import { type ReactNode } from 'react';
import { Button } from './Button';

export function Card({
  title,
  children,
  image,
  price,
  onclick,
}: {
  title: ReactNode;
  children: ReactNode;
  image: ReactNode;
  price: number;
  onclick: () => void;
}): JSX.Element {
  return (
    <div className='ui-group ui-rounded-lg ui-border ui-border-transparent ui-px-5 ui-py-4 ui-transition-colors hover:ui-border-neutral-700 hover:ui-bg-neutral-800/30 ui-bg-neutral-950 ui-shadow-md ui-shadow-slate-800 ui-gap-y-5 ui-flex ui-flex-col ui-justify-between'>
      {title}
      <div className='ui-h-48 ui-w-full ui-overflow-hidden ui-flex ui-justify-center ui-items-center'>
        {image}
      </div>
      <p>{price}</p>
      <p className='ui-m-0 ui-max-w-[30ch] ui-text-sm ui-opacity-50 ui-line-clamp-3'>
        {children}
      </p>
      <Button onClick={onclick} variant='outline'>
        Add to cart
      </Button>
    </div>
  );
}
