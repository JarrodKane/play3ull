import '@repo/ui/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '../components/Navbar';
import { CartProvider, CustomApolloProvider } from '../providers';
import './globals.css';

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
          <CartProvider>
            <Navbar />
            {children}
          </CartProvider>
        </CustomApolloProvider>
      </body>
    </html>
  );
}
