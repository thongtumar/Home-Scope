import React, { useState } from 'react';
import { ProjectSpec } from '../types';

interface ProjectHeroProps {
  spec: ProjectSpec;
}

export const ProjectHero: React.FC<ProjectHeroProps> = ({ spec }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  // 3 hardcoded perspective images uploaded by user (permanently pinned to public/)
  const gallery = [
    {
      id: 'goc1',
      url: `${baseUrl}goc1.jpg`,
      label: 'Góc 1: Phối cảnh khuôn viên xanh và công trình',
      caption: 'Hình minh họa trong tình huống nghiên cứu',
      tabLabel: 'Góc 1',
    },
    {
      id: 'goc2',
      url: `${baseUrl}goc2.jpg`,
      label: 'Góc 2: Mặt đứng công trình & ban công đón sáng tự nhiên',
      caption: 'Hình minh họa trong tình huống nghiên cứu',
      tabLabel: 'Góc 2',
    },
    {
      id: 'goc3',
      url: `${baseUrl}goc3.jpg`,
      label: 'Góc 3: Khu vực nội khu & đường dạo bộ cây xanh',
      caption: 'Hình minh họa trong tình huống nghiên cứu',
      tabLabel: 'Góc 3',
    },
  ];

  return (
    <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Left / Top: Visual Section (Permanently pinned render images) */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-slate-950 relative">
          <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950 flex flex-col justify-between">
            
            {/* Preload and layer all 3 images for instant, foolproof tab switching */}
            <div className="absolute inset-0">
              {gallery.map((item, idx) => (
                <img
                  key={item.id}
                  src={`${item.url}?v=20261001`}
                  alt={item.label}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-contain absolute inset-0 ${
                    activeImageIndex === idx ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
                />
              ))}
            </div>

            {/* Gradient scrim for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/15 to-transparent pointer-events-none z-20" />

            {/* Academic Visual Caption Cues & Simplified Góc 1 / Góc 2 / Góc 3 Switcher */}
            <div className="absolute bottom-3 left-4 right-4 z-30 flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 text-white text-xs">
              {/* Full descriptive title under "Hình minh họa trong tình huống nghiên cứu" */}
              <div className="bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 shadow-sm max-w-sm">
                <span className="font-semibold text-slate-200 block text-xs">
                  {gallery[activeImageIndex].caption}
                </span>
                <span className="block text-[11px] text-slate-300 mt-0.5 font-medium">
                  {gallery[activeImageIndex].label}
                </span>
              </div>

              {/* Simplified Switcher: Góc 1, Góc 2, Góc 3 */}
              <div className="flex gap-1.5 bg-slate-900/85 backdrop-blur-md p-1 rounded-xl border border-white/10 shrink-0">
                {gallery.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                      activeImageIndex === idx
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {item.tabLabel}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right: Neutral Project Specs */}
        <div className="lg:col-span-5 p-6 sm:p-7 flex flex-col justify-between bg-white">
          <div>
            {/* Project Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <span className="text-[11px] font-semibold tracking-wider uppercase bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200">
                Dự án mô phỏng
              </span>
              <span className="hidden sm:inline text-xs text-slate-400">·</span>
              <span className="text-xs text-slate-500">Mã thông tin: {spec.code}</span>
            </div>

            <h1 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight leading-snug">
              {spec.name}
            </h1>

            <p className="mt-3.5 text-xs sm:text-[13px] leading-relaxed text-slate-600 border-l-2 border-emerald-500 pl-3.5">
              {spec.description}
            </p>

            {/* Structured Specifications Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-50/90 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-500 block text-[11px] mb-0.5">Loại hình</span>
                <span className="font-semibold text-slate-800 text-[13px]">{spec.projectType}</span>
              </div>
              <div className="bg-slate-50/90 p-3 rounded-xl border border-slate-100">
                <span className="text-slate-500 block text-[11px] mb-0.5">Quy mô</span>
                <span className="font-semibold text-slate-800 text-[13px]">{spec.scale}</span>
              </div>
            </div>
          </div>

          {/* Note on intentionally omitted commercial information */}
          <div className="mt-6 pt-4 border-t border-slate-100 bg-slate-50/90 -mx-6 -mb-6 sm:-mx-7 sm:-mb-7 p-4 sm:px-7 rounded-b-2xl">
            <p className="text-[12px] text-slate-600 leading-relaxed">
              Vị trí, diện tích và giá bán không được hiển thị trong tình huống này. Vui lòng giả định các yếu tố này phù hợp với nhu cầu của anh/chị, theo hướng dẫn ở đầu trang.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
