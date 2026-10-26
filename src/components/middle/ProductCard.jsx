import { getMetricLabel } from "../../constants/metrics";
import { getLevel, getLevelStyles } from "../../utils/levels";

function ProductCard({ product, selectedMetric, isSelected, onSelect }) {
  // No metric selected → value is undefined → level is null → neutral gray.
  const value = selectedMetric ? product[selectedMetric] : undefined;
  const level = getLevel(value);
  const styles = getLevelStyles(level);

  return (
    <button
      type="button"
      onClick={() => onSelect(product.id)}
      aria-current={isSelected ? "true" : undefined}
      className={`flex h-full w-full flex-col rounded-xl border p-4 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${styles.card} ${
        isSelected ? "ring-2 ring-blue-600 ring-offset-2" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-900">{product.name}</h3>
        {isSelected && (
          <span className="shrink-0 rounded-full bg-blue-600 px-2 py-0.5 text-xs font-medium text-white">
            Selected
          </span>
        )}
      </div>

      <p className="mt-1 text-sm text-gray-700">{product.category}</p>

      {/* The value and level as text, so the meaning never depends on color alone */}
      <p className="mt-auto pt-3 text-sm text-gray-800">
        {level ? (
          <>
            {getMetricLabel(selectedMetric)}:{" "}
            <span className="font-semibold">{value}%</span> · {styles.label}
          </>
        ) : (
          <span className="text-gray-500">No metric selected</span>
        )}
      </p>
    </button>
  );
}

export default ProductCard;
