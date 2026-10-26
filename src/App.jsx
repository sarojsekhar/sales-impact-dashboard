function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Sales Impact Dashboard
      </h1>
      <div className="mt-4 flex gap-3">
        <span className="rounded bg-green-200 px-3 py-1">Low</span>
        <span className="rounded bg-yellow-200 px-3 py-1">Medium</span>
        <span className="rounded bg-red-200 px-3 py-1">High</span>
        <span className="rounded bg-gray-200 px-3 py-1">Neutral</span>
      </div>
    </div>
  );
}

export default App;
