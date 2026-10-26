import { METRICS } from "../../constants/metrics";
import MetricsTable from "./MetricsTable";
import MetricCard from "./MetricCard";

function ProductDetails({ product }) {
  // Nothing clicked yet → placeholder
  if (!product) {
    return (
      <div className="mt-3 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
        <p className="font-medium text-gray-700">Select a product</p>
        <p className="mt-1 text-sm text-gray-500">
          Click any product to see its Sales Impacted, Average Sales and Not
          Sold figures here.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-3 space-y-4">
      <div>
        <h3 className="text-base font-semibold text-gray-900">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600">{product.category}</p>
      </div>

      <MetricsTable product={product} />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
        {METRICS.map((metric) => (
          <MetricCard
            key={metric.key}
            label={metric.label}
            value={product[metric.key]}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
