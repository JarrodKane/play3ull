import type { ReactNode } from 'react';

// This component in its current state does not make much sense to have in the packages/UI
// TODO: Make this nav more reusable with colors etc, as well as rename left/right
export function Navbar({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}): JSX.Element {
  return (
    <nav className='ui-bg-red-800 ui-shadow-md ui-shadow-slate-800'>
      <div className='ui-max-w-screen-xl ui-flex ui-flex-wrap ui-items-center ui-justify-between ui-mx-auto ui-p-4'>
        {left}
        {right}
      </div>
    </nav>
  );
}
