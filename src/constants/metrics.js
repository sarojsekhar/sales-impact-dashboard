// The three options shown in the right-column dropdown.
// `key` matches the field name in products.json.
// `label` is what the user sees.
export const METRICS = [
  { key: "salesImpacted", label: "Sales Impacted" },
  { key: "averageSales", label: "Average Sales" },
  { key: "notSold", label: "Not Sold" },
];

// Shown next to each option in the dropdown, e.g. "Sales Impacted (0% – 100%)"
export const METRIC_RANGE = "0% – 100%";

// Find a metric's label from its key, e.g. "notSold" → "Not Sold"
export function getMetricLabel(key) {
  return METRICS.find((metric) => metric.key === key)?.label ?? "";
}
