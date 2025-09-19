"use client";

const OPTIONS = [
  { id: "music",   label: "Musik" },
  { id: "dyr",     label: "Dyr" },
  { id: "børn",    label: "Børn" },
  { id: "rygning", label: "Rygning" },
];

export function PrefsFilter({ value = [], onChange, className = "" }) {
  const selected = new Set(value);

  return (
    <div className={`${className} border-b border-gray-300 pb-5`}>
      <div className="font-semibold">Præferencer</div>

      {OPTIONS.map((opt) => (
        <label key={opt.id} className="flex gap-3 py-2">
          <input
            className="h-5 w-5"
            type="checkbox"
            checked={selected.has(opt.id)}
            onChange={() => {
              const next = selected.has(opt.id)
                ? value.filter((v) => v !== opt.id)
                : [...value, opt.id];
              onChange && onChange(next);
            }}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
