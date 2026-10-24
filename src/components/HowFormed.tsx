import React, { useId, useState } from 'react';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';
import { Explanation } from '../types';

interface HowFormedProps {
  explanation: Explanation;
}

// Accordion "Kết quả này được hình thành như thế nào?" (A. Đầu vào, B. Xử lý, C. Giới hạn)
export const HowFormed: React.FC<HowFormedProps> = ({ explanation }) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const parts = [
    { label: 'A. Thông tin đầu vào', text: explanation.input },
    { label: 'B. Cách xử lý hoặc tổng hợp', text: explanation.process },
    { label: 'C. Giới hạn thông tin', text: explanation.limits },
  ];

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full min-h-[40px] flex items-center justify-between gap-2 text-left text-[12px] font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
      >
        <span className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 shrink-0 text-slate-500" />
          Kết quả này được hình thành như thế nào?
        </span>
        {open ? <ChevronUp className="w-3.5 h-3.5 shrink-0" /> : <ChevronDown className="w-3.5 h-3.5 shrink-0" />}
      </button>

      {open && (
        <div id={panelId} className="mt-1 p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2.5">
          {parts.map((p) => (
            <div key={p.label}>
              <span className="block text-[11px] font-semibold text-slate-700">{p.label}</span>
              <p className="text-[12px] text-slate-600 leading-relaxed mt-0.5">{p.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
