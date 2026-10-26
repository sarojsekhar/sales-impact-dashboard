import { METRICS } from "../../constants/metrics";
import { getLevel, getLevelStyles } from "../../utils/levels";

function MetricsTable({ product }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Metrics for {product.name}</caption>
        <thead className="bg-gray-50 text-gray-600">
          <tr>
            <th scope="col" className="px-3 py-2 font-medium">
              Metric
            </th>
            <th scope="col" className="px-3 py-2 text-right font-medium">
              Value
            </th>
            <th scope="col" className="px-3 py-2 font-medium">
              Level
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {METRICS.map((metric) => {
            const value = product[metric.key];
            const styles = getLevelStyles(getLevel(value));
            return (
              <tr key={metric.key}>
                <th scope="row" className="px-3 py-2 font-medium text-gray-900">
                  {metric.label}
                </th>
                <td className="px-3 py-2 text-right tabular-nums text-gray-900">
                  {value}%
                </td>
                <td className="px-3 py-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles.badge}`}
                  >
                    {styles.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default MetricsTable;
