export const snackTypes = [
  { id: 'all', label: { en: 'All', hi: 'सभी' } },
  { id: 'biscuits', label: { en: 'Biscuits', hi: 'बिस्कुट' } },
  { id: 'chips', label: { en: 'Chips', hi: 'चिप्स' } },
  { id: 'chocolates', label: { en: 'Chocolates', hi: 'चॉकलेट' } },
  { id: 'namkeen', label: { en: 'Namkeen', hi: 'नमकीन' } },
] as const;

export type SnackTypeId = (typeof snackTypes)[number]['id'];
