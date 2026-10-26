import { useState } from "react";
import { useItemsPerPage } from "../../hooks/useItemsPerPage";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

function ProductList({
  products,
  selectedMetric,
  selectedProductId,
  onSelectProduct,
}) {
  const itemsPerPage = useItemsPerPage();

  // We remember the position of the FIRST product the user is looking at,
  // not the page number. The page is worked out from it (see below).
  const [firstVisibleIndex, setFirstVisibleIndex] = useState(0);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentPage = Math.floor(firstVisibleIndex / itemsPerPage) + 1;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, products.length);
  const visibleProducts = products.slice(startIndex, endIndex);

  function handlePageChange(page) {
    setFirstVisibleIndex((page - 1) * itemsPerPage);
  }

  if (products.length === 0) {
    return <p className="mt-3 text-sm text-gray-500">No products to show.</p>;
  }

  return (
    <div className="mt-3">
      <p className="text-sm text-gray-600" aria-live="polite">
        Showing {startIndex + 1}–{endIndex} of {products.length} products
      </p>

      <ul className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visibleProducts.map((product) => (
          <li key={product.id}>
            <ProductCard
              product={product}
              selectedMetric={selectedMetric}
              isSelected={product.id === selectedProductId}
              onSelect={onSelectProduct}
            />
          </li>
        ))}
      </ul>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default ProductList;
