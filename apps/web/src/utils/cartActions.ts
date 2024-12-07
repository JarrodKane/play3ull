export const cartActions = (): {
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
} => {
  const addToCart = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(id);
  };
  const removeFromCart = (id: string) => {
    // eslint-disable-next-line no-console
    console.log(id);
  };

  return { addToCart, removeFromCart };
};
