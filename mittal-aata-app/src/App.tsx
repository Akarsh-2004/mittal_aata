import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SupportStrip } from './components/SupportStrip';
import { PageLoader } from './components/PageLoader';
import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { SearchPage } from './pages/SearchPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ScrollToTop } from './components/ScrollToTop';
import './index.css';

const LOADER_MIN_MS = 2400;
const LOADER_EXIT_MS = 450;

function AppLayout({
  children,
  showSearch = true,
  overlayHeader = false,
  homeLayout = false,
  immersive = false,
}: {
  children: React.ReactNode;
  showSearch?: boolean;
  overlayHeader?: boolean;
  homeLayout?: boolean;
  immersive?: boolean;
}) {
  return (
    <>
      <Header showSearch={showSearch} overlay={overlayHeader} />
      <main
        className={`main-content ${homeLayout ? 'main-content--home' : ''} ${immersive ? 'main-content--immersive' : ''}`}
      >
        {children}
      </main>
      <div className="site-chrome">
        <SupportStrip />
        <Footer />
      </div>
    </>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout showSearch={false} overlayHeader homeLayout>
            <HomePage />
          </AppLayout>
        }
      />
      <Route
        path="/categories"
        element={
          <AppLayout showSearch={false}>
            <CategoriesPage />
          </AppLayout>
        }
      />
      <Route
        path="/category/:categoryId"
        element={
          <AppLayout immersive>
            <CategoryPage />
          </AppLayout>
        }
      />
      <Route
        path="/product/:productId"
        element={
          <AppLayout showSearch={false} immersive>
            <ProductPage />
          </AppLayout>
        }
      />
      <Route
        path="/search"
        element={
          <AppLayout showSearch={false}>
            <SearchPage />
          </AppLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <AppLayout showSearch={false}>
            <CartPage />
          </AppLayout>
        }
      />
      <Route
        path="/checkout"
        element={
          <AppLayout showSearch={false}>
            <CheckoutPage />
          </AppLayout>
        }
      />
    </Routes>
  );
}

export default function App() {
  const [loaderPhase, setLoaderPhase] = useState<'show' | 'exit' | 'done'>('show');

  useEffect(() => {
    const exitTimer = window.setTimeout(() => setLoaderPhase('exit'), LOADER_MIN_MS);
    return () => window.clearTimeout(exitTimer);
  }, []);

  useEffect(() => {
    if (loaderPhase !== 'exit') return;
    const doneTimer = window.setTimeout(() => setLoaderPhase('done'), LOADER_EXIT_MS);
    return () => window.clearTimeout(doneTimer);
  }, [loaderPhase]);

  return (
    <LanguageProvider>
      <CartProvider>
        {loaderPhase !== 'done' && (
          <PageLoader exiting={loaderPhase === 'exit'} />
        )}
        <BrowserRouter>
          <ScrollToTop />
          <div className={`app ${loaderPhase !== 'done' ? 'app--loading' : ''}`}>
            <AppRoutes />
          </div>
        </BrowserRouter>
      </CartProvider>
    </LanguageProvider>
  );
}
