import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Brand & Subtitle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0 animate-pulse"></span>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
              HomeScope
            </span>
          </div>

          <span className="hidden sm:inline-block text-xs text-slate-500 font-medium pl-3 border-l border-slate-200 whitespace-nowrap">
            Cổng thông tin & Minh bạch dữ liệu Bất động sản
          </span>
        </div>

        {/* Right Info Tag */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 whitespace-nowrap">
            Dự án: An Phú Green Residence
          </span>
        </div>
      </div>
    </header>
  );
};
