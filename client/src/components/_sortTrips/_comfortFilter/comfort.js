"use client";

export function ComfortFilter({ value = false, onChange, className = "" }) {
    
  return (
    <div className={`${className} border-b border-gray-300 pb-5`}>
      <div className="font-semibold">Komfort</div>
      <label className="flex gap-3 items-center">
        <input
          className="h-6 w-6"
          type="checkbox"
          checked={value}
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
        <span>Højest to personer på bagsædet</span>
      </label>
    </div>
  );
}
