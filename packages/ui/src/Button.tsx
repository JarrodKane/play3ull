import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'outline';
}

export function Button({
  variant,
  onClick,
  children,
}: ButtonProps): JSX.Element {
  const btnStyles =
    variant === 'outline'
      ? 'ui-border-2 ui-border-purple-500 ui-text-purple-500 hover:ui-bg-purple-100 hover:ui-text-purple-800 focus:ui-ring-2 focus:ui-ring-purple-500'
      : 'ui-bg-purple-500 ui-text-white hover:ui-bg-purple-600 hover:ui-text-purple-900 focus:ui-ring-2 focus:ui-ring-purple-500';
  return (
    <button
      className={`ui-rounded-md ui-px-4 ui-py-2 ui-transition-all ${btnStyles}`}
      onClick={onClick}
      type='button'
    >
      {children}
    </button>
  );
}
