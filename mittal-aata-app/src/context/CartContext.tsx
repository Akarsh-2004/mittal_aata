import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import type { CartItem, Unit } from '../types';
import { getProductById } from '../data/products';

interface CartContextValue {
  items: CartItem[];
  addItem: (productId: string, quantity: number, unit: Unit) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  total: number;
  getItemQuantity: (productId: string) => number;
}

const CartContext = createContext<CartContextValue | null>(null);

const CART_KEY = 'mittal-cart';

function loadCart(): CartItem[] {
  try {
    const saved = localStorage.getItem(CART_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  const persist = useCallback((newItems: CartItem[]) => {
    setItems(newItems);
    localStorage.setItem(CART_KEY, JSON.stringify(newItems));
  }, []);

  const addItem = useCallback(
    (productId: string, quantity: number, unit: Unit) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.productId === productId);
        let next: CartItem[];
        if (existing) {
          next = prev.map((i) =>
            i.productId === productId
              ? { ...i, quantity: i.quantity + quantity, unit }
              : i
          );
        } else {
          next = [...prev, { productId, quantity, unit }];
        }
        localStorage.setItem(CART_KEY, JSON.stringify(next));
        return next;
      });
    },
    []
  );

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => {
      const next = prev.filter((i) => i.productId !== productId);
      localStorage.setItem(CART_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId);
        return;
      }
      setItems((prev) => {
        const next = prev.map((i) =>
          i.productId === productId ? { ...i, quantity } : i
        );
        localStorage.setItem(CART_KEY, JSON.stringify(next));
        return next;
      });
    },
    [removeItem]
  );

  const clearCart = useCallback(() => persist([]), [persist]);

  const itemCount = useMemo(() => items.length, [items]);

  const total = useMemo(
    () =>
      items.reduce((sum, item) => {
        const product = getProductById(item.productId);
        if (!product) return sum;
        return sum + product.price * item.quantity;
      }, 0),
    [items]
  );

  const getItemQuantity = useCallback(
    (productId: string) =>
      items.find((i) => i.productId === productId)?.quantity ?? 0,
    [items]
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        itemCount,
        total,
        getItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
