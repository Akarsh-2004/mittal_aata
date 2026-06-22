import type { Brand } from '../types';

export const brands: Brand[] = [
  { id: 'mittal', name: 'Mittal' },
  { id: 'fortune', name: 'Fortune' },
  { id: 'aashirvaad', name: 'Aashirvaad' },
  { id: 'amul', name: 'Amul' },
  { id: 'patanjali', name: 'Patanjali' },
  { id: 'tata', name: 'Tata Sampann' },
  { id: 'mdh', name: 'MDH' },
  { id: 'everest', name: 'Everest' },
  { id: 'parle', name: 'Parle' },
  { id: 'britannia', name: 'Britannia' },
  { id: 'lays', name: 'Lay\'s' },
  { id: 'cadbury', name: 'Cadbury' },
];

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}
