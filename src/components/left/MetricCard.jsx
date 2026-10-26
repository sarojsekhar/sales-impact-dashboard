import { getLevel, getLevelStyles } from "../../utils/levels";

function MetricCard({ label, value }) {
  const level = getLevel(value);
  const styles = getLevelStyles(level);

  // Keep the bar inside 0–100%, even if the data ever has a bad value.
  const barWidth = Math.min(Math.max(value, 0), 100);

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-gray-700">{label}</p>
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles.badge}`}
        >
          {styles.label}
        </span>
      </div>

      <p className="mt-1 text-2xl font-bold text-gray-900">{value}%</p>

      {/* The bar is decoration: the number and level above already say the same thing */}
      <div
        aria-hidden="true"
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200"
      >
        <div
          className={`h-full rounded-full transition-[width] duration-500 motion-reduce:transition-none ${styles.bar}`}
          style={{ width: `${barWidth}%` }}
        />
      </div>
    </div>
  );
}

export default MetricCard;
