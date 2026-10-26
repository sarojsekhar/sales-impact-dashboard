import { LEVEL_STYLES, NEUTRAL_STYLES } from "../../utils/levels";

function ColorLegend() {
  return (
    <div className="mt-6 border-t border-gray-200 pt-4">
      <h3 className="text-sm font-semibold text-gray-700">Color legend</h3>

      <ul className="mt-3 space-y-3">
        {Object.entries(LEVEL_STYLES).map(([level, styles]) => (
          <li key={level} className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={`mt-0.5 h-5 w-5 shrink-0 rounded border ${styles.card}`}
            />
            <div className="text-sm">
              <p className="font-medium text-gray-900">{styles.label}</p>
              <p className="text-gray-600">{styles.range}</p>
            </div>
          </li>
        ))}

        <li className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className={`mt-0.5 h-5 w-5 shrink-0 rounded border ${NEUTRAL_STYLES.card}`}
          />
          <div className="text-sm">
            <p className="font-medium text-gray-900">Neutral</p>
            <p className="text-gray-600">No metric selected</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ColorLegend;
