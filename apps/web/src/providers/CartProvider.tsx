'use client';

// TODO: This the entire file should be renamed since now it also holds the products
//  TODO: Remove the products out of here, and instead pass them into the functions, this context is messy and not specific enough
import type { ReactNode } from 'react';
import { createContext, useState } from 'react';
import type { GetProductsQuery } from '../gql/graphql';

// TODO: Store in local state, reach in to grab on load
interface CartProps {
  [key: number]: {
    total: number;
    price: number;
  };
  products: GetProductsQuery['products'];
}

export type SetCart = React.Dispatch<React.SetStateAction<CartProps>>;

interface CartContextType {
  addToCart: (id: number, price: number) => void;
  cart: CartProps;
  products: GetProductsQuery['products'];
  removeFromCart: (id: number) => void;
  setProducts: (products: GetProductsQuery['products']) => void;
  totalAmount: number;
  totalInCartProducts: number;
}

const initialCart: CartProps = { products: [] };

export const CartContext = createContext<CartContextType>({
  // These is just a dummy initial sets
  cart: initialCart,
  addToCart: () => {
    throw new Error('addToCart function must be implemented');
  },
  removeFromCart: () => {
    throw new Error('removeFromCart function must be implemented');
  },
  products: [],
  setProducts: () => {
    throw new Error('setProducts function must be implemented');
  },
  totalAmount: 0,
  totalInCartProducts: 0,
});

export function CartProvider({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const [cart, setCart] = useState<CartProps>(initialCart);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalInCartProducts, setTotalInCartProducts] = useState<number>(0);
  const [products, setProducts] = useState<GetProductsQuery['products']>([]);

  const addToCart = (id: number, price: number): void => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (cart[id]) {
      setCart((prevCart) => ({
        ...prevCart,
        [id]: { total: prevCart[id].total + 1, price: prevCart[id].price },
      }));
    } else {
      setCart((prevCart) => ({
        ...prevCart,
        [id]: { total: 1, price },
      }));
    }
    setTotalInCartProducts((prevTotal) => prevTotal + 1);
    setTotalAmount((prevTotal) => prevTotal + products[id].price);
  };

  const removeFromCart = (id: number): void => {
    if (cart[id].total > 1) {
      setCart((prevCart) => ({
        ...prevCart,
        [id]: {
          ...prevCart[id],
          total: prevCart[id].total - 1,
        },
      }));
    } else {
      setCart((prevCart) => {
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (prevCart[id]) {
          const { [id]: _, ...remainingCart } = prevCart;
          return {
            ...remainingCart,
          };
        }
        return prevCart;
      });
    }
    setTotalInCartProducts((prevTotal) => prevTotal - 1);
    setTotalAmount((prevTotal) => prevTotal - products[id].price);
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        products,
        removeFromCart,
        setProducts: (productList: GetProductsQuery['products']) => {
          setProducts(productList);
        },
        totalAmount,
        totalInCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
