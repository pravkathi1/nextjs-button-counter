'use client';
import { useState } from "react";

export default function Counter({ initialCount = 0, initialStep = 1 }) {
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(initialStep);

  const increment = () => setCount(c => c + step);
  const decrement = () => setCount(c => Math.max(0, c - step));
  const reset = () => setCount(initialCount);

  return (
    <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
      <h2 className="text-2xl font-semibold" aria-live="polite">
        Count: {count}
      </h2>

      <div className="flex gap-2">
        <button
          onClick={increment}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          +{step}
        </button>
        <button
          onClick={decrement}
          disabled={count - step < 0}
          className={`px-4 py-2 text-white rounded ${
            count - step < 0 ? "bg-gray-400" : "bg-red-500"
          }`}
        >
          -{step}
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col items-center">
        <label htmlFor="step" className="font-medium">
          Step:
        </label>
        <input
          id="step"
          type="number"
          min="1"
          value={step}
          onChange={(e) => setStep(Math.max(1, Number(e.target.value)))}
          className="border p-1 w-16 text-center rounded"
        />
      </div>
    </div>
  );
}