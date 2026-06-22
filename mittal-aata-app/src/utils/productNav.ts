/** Navigation context for product page Back button */
export type ProductNavState = {
  backTo: string;
  /** State to restore when navigating to backTo (chains home → product A → product B) */
  backState?: ProductNavState | CategoryPageState;
};

export type CategoryPageState = {
  fromChakki?: boolean;
  chakkiAisle?: string;
};

export function productNavState(
  backTo: string,
  backState?: ProductNavState | CategoryPageState
): ProductNavState {
  return backState ? { backTo, backState } : { backTo };
}

export function productLinkState(pathname: string, hash: string, state: unknown): ProductNavState {
  const path = `${pathname}${hash}`;
  const nav = state as ProductNavState | null;

  if (pathname.startsWith('/product/')) {
    return {
      backTo: path,
      backState: nav ?? undefined,
    };
  }

  const categoryState = state as CategoryPageState | null;
  if (categoryState?.fromChakki) {
    return { backTo: path, backState: categoryState };
  }

  return { backTo: path };
}
