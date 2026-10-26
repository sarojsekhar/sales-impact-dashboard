import { useRef, useState } from "react";
import products from "./data/products.json";
import MetricSelector from "./components/right/MetricSelector";
import ColorLegend from "./components/right/ColorLegend";
import ProductList from "./components/middle/ProductList";
import ProductDetails from "./components/left/ProductDetails";

function App() {
  // ── Shared state (lifted up to App) ──────────────────────────────
  const [selectedMetric, setSelectedMetric] = useState(null);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // ── Derived value ────────────────────────────────────────────────
  const selectedProduct =
    products.find((product) => product.id === selectedProductId) ?? null;

  // A reference to the left column's <section>, so we can scroll to it.
  const detailsRef = useRef(null);

  function handleSelectProduct(productId) {
    setSelectedProductId(productId);

    // On desktop the details are already visible, so only scroll on smaller screens.
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (isDesktop) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    detailsRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold sm:text-2xl">
            Sales Impact Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Choose a metric to color the products, then select a product to see
            its details.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* RIGHT column: first in the code, so first on mobile */}
          <section
            aria-labelledby="metric-heading"
            className="rounded-xl bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:order-3 lg:col-span-3 lg:self-start"
          >
            <h2 id="metric-heading" className="text-lg font-semibold">
              Metric
            </h2>
            <div className="mt-3">
              <MetricSelector
                selectedMetric={selectedMetric}
                onMetricChange={setSelectedMetric}
              />
              <ColorLegend />
            </div>
          </section>

          {/* MIDDLE column */}
          <section
            aria-labelledby="products-heading"
            className="rounded-xl bg-white p-4 shadow-sm lg:order-2 lg:col-span-6"
          >
            <h2 id="products-heading" className="text-lg font-semibold">
              Products
            </h2>
            <ProductList
              products={products}
              selectedMetric={selectedMetric}
              selectedProductId={selectedProductId}
              onSelectProduct={handleSelectProduct}
            />
          </section>

          {/* LEFT column: last in the code, so last on mobile */}
          <section
            ref={detailsRef}
            aria-labelledby="details-heading"
            className="scroll-mt-4 rounded-xl bg-white p-4 shadow-sm lg:sticky lg:top-6 lg:order-1 lg:col-span-3 lg:self-start"
          >
            <h2 id="details-heading" className="text-lg font-semibold">
              Product Details
            </h2>
            <ProductDetails product={selectedProduct} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
