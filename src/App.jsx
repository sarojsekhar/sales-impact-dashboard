import products from "./data/products.json";
import { METRICS } from "./constants/metrics";
import { getLevel, getLevelStyles } from "./utils/levels";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800">Step 3: data check</h1>
      <p className="text-sm text-gray-600">{products.length} products loaded</p>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full bg-white text-sm">
          <thead>
            <tr>
              <th className="p-2 text-left">Product</th>
              {METRICS.map((metric) => (
                <th key={metric.key} className="p-2 text-left">
                  {metric.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t">
                <td className="p-2">{product.name}</td>
                {METRICS.map((metric) => {
                  const value = product[metric.key];
                  const styles = getLevelStyles(getLevel(value));
                  return (
                    <td key={metric.key} className="p-2">
                      <span className={`rounded px-2 py-0.5 ${styles.badge}`}>
                        {value}% · {styles.label}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
