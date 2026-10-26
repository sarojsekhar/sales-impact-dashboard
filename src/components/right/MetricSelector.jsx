import { METRICS, METRIC_RANGE, getMetricLabel } from "../../constants/metrics";

function MetricSelector({ selectedMetric, onMetricChange }) {
  function handleChange(event) {
    // The "Select a metric" option has value "", so we store null (no metric).
    onMetricChange(event.target.value || null);
  }

  return (
    <div>
      <label
        htmlFor="metric-select"
        className="block text-sm font-medium text-gray-700"
      >
        Color products by
      </label>

      <select
        id="metric-select"
        value={selectedMetric ?? ""}
        onChange={handleChange}
        className="mt-1 w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 sm:text-sm"
      >
        <option value="">Select a metric</option>
        {METRICS.map((metric) => (
          <option key={metric.key} value={metric.key}>
            {metric.label} ({METRIC_RANGE})
          </option>
        ))}
      </select>

      <p className="mt-2 text-sm text-gray-600" aria-live="polite">
        {selectedMetric
          ? `Products are colored by ${getMetricLabel(selectedMetric)}.`
          : "No metric selected. Products are shown in gray."}
      </p>
    </div>
  );
}

export default MetricSelector;
