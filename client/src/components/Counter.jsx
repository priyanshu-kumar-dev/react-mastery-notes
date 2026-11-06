import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full flex items-center justify-center bg-slate-100 px-4 py-8">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl">
        <h1 className="mb-6 text-3xl font-bold text-slate-800">Counter App</h1>

        <h2 className="mb-8 text-6xl font-extrabold text-indigo-600">
          {count}
        </h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="rounded-lg bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
          >
            Increase
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="rounded-lg bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600 active:scale-95"
          >
            Decrease
          </button>

          <button
            onClick={() => setCount(0)}
            className="rounded-lg bg-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-800 active:scale-95"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
