import './globals.css';
import '@repo/ui/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@repo/ui/components';
import Link from 'next/link';
import { CustomApolloProvider } from '../providers/apollo-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Play3ull',
  description: 'Ecom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <CustomApolloProvider>
          <Navbar
            left={<h1>Play3ull</h1>}
            right={
              <div className='flex gap-x-5'>
                <Link href='/account'>Account</Link>
                <Link href='/cart'>Cart</Link>
              </div>
            }
          />
          {children}
        </CustomApolloProvider>
      </body>
    </html>
  );
}
