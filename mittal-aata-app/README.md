# Mittal Aata Chakki — E-Commerce App

A React e-commerce app for **Mittal Aata Chakki**, Dehradun's trusted grocery and fresh chakki atta store.

## Features

- **Clean, accessible UI** — Large buttons, readable fonts, simple navigation (designed for ages 35–75)
- **English / Hindi toggle** — Switch language anytime from the header
- **Product categories & brands** — Atta, Dal, Rice, Ghee, Spices, Snacks, Pahadi grains
- **Smart product suggestions** — Flipkart-style "Goes well with this" (Dal → Rice, Ghee → other brands, etc.)
- **Quantity presets** — Realistic pre-set quantities (1 kg, 2 kg, 5 kg…) plus custom entry
- **Quick search** — Find products by name, brand, or category
- **Cart + WhatsApp checkout** — Build cart and place order via WhatsApp

## Getting Started

```bash
cd mittal-aata-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Brand Colors

| Name | Hex |
|------|-----|
| Chakki Green | `#1E3D20` |
| Harvest Gold | `#C4973A` |
| Atta Cream | `#F7F0E0` |
| Stone Charcoal | `#1A1A18` |

## Project Structure

```
src/
├── components/     # UI components (Header, ProductCard, QuantitySelector, etc.)
├── context/        # Cart & language state
├── data/           # Products, categories, suggestion logic
├── i18n/           # English & Hindi translations
├── pages/          # Home, Category, Product, Cart, Search
└── types/          # TypeScript interfaces
```

## Customization

- **Products**: Edit `src/data/products.ts`
- **WhatsApp number**: Update in `src/pages/CartPage.tsx`
- **Logo**: Replace `public/images/logo.jpeg`
