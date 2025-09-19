"use client";

export function BaggageFilter({ options = [], value = null, onChange, className = "" }) {
  const selectedIdx = value == null ? -1 : options.findIndex(o => o.id === value);

  return (
    <div className={`${className} border-b border-gray-300 pb-5`}>
      <div className="font-semibold">Bagage</div>
      <div className="flex gap-3 justify-center pt-3">

        {options.map((opt, idx) => (
          <label key={opt.id} className="cursor-pointer select-none">
            <input
              type="radio"
              name="bagSize"
              value={opt.id}
              checked={value === opt.id}
              onChange={() => onChange?.(opt.id)}
              className="sr-only"
            />
            <img
              src={opt.iconUrl}
              alt={opt.name}
              width={40}
              height={35}
              className={`block rounded p-1 transition ${
                selectedIdx !== -1 && idx <= selectedIdx
                  ? "ring-2 ring-blue-300 bg-emerald-50 opacity-100"
                  : "opacity-70 hover:opacity-100"
              }`}
            />
          </label>
        ))}
      </div>
    </div>
  );
}
