import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp } from 'lucide-react';
import { AISourceItem, InfoGroup } from '../types';
import { StatusChip } from './StatusChip';

interface DataStatusSectionProps {
  groups: InfoGroup[];
  sources: AISourceItem[];
}

export const DataStatusSection: React.FC<DataStatusSectionProps> = ({ groups, sources }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const sourceTitles = (group: InfoGroup) =>
    group.sourceIds.map((id) => {
      const src = sources.find((s) => s.id === id);
      return src ? `${src.id} · ${src.title}` : id;
    });

  const renderSources = (group: InfoGroup) =>
    group.sourceIds.length === 0 ? (
      <span className="text-slate-500 italic">Chưa cung cấp thông tin</span>
    ) : (
      <ul className="space-y-0.5">
        {sourceTitles(group).map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    );

  const renderStatuses = (group: InfoGroup) => (
    <div className="flex flex-wrap gap-1.5">
      {group.statuses.map((s) => (
        <StatusChip key={s} status={s} />
      ))}
    </div>
  );

  const renderToggle = (group: InfoGroup) => {
    const isOpen = openId === group.id;
    return (
      <button
        type="button"
        onClick={() => setOpenId(isOpen ? null : group.id)}
        aria-expanded={isOpen}
        className="min-h-[36px] inline-flex items-center gap-1 text-[12px] font-medium text-slate-600 hover:text-slate-900 cursor-pointer whitespace-nowrap"
      >
        {isOpen ? 'Thu gọn' : 'Xem chi tiết'}
        {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
    );
  };

  return (
    <section id="nguon-du-lieu" className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-6 space-y-4">
      <div>
        <h2 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
          <Layers className="w-4 h-4 text-slate-500" />
          Nguồn dữ liệu & trạng thái thông tin
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
          Thông tin dưới đây minh họa các nguồn dữ liệu và mức độ có thể đối chiếu của từng nhóm thông tin về dự án. Một số nội dung chưa có đầy đủ tài liệu hỗ trợ.
        </p>
      </div>

      {/* Desktop / tablet: bảng 4 cột */}
      <div className="hidden md:block overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full text-left text-[12.5px] text-slate-700">
          <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-500">
            <tr>
              <th scope="col" className="px-4 py-2.5 font-semibold w-[24%]">Nhóm thông tin</th>
              <th scope="col" className="px-4 py-2.5 font-semibold w-[32%]">Nguồn/căn cứ dữ liệu</th>
              <th scope="col" className="px-4 py-2.5 font-semibold w-[30%]">Trạng thái thông tin</th>
              <th scope="col" className="px-4 py-2.5 font-semibold">Xem chi tiết</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((g) => (
              <React.Fragment key={g.id}>
                <tr className="border-t border-slate-200 align-top">
                  <td className="px-4 py-3 font-semibold text-slate-800">{g.name}</td>
                  <td className="px-4 py-3 text-slate-600">{renderSources(g)}</td>
                  <td className="px-4 py-3">{renderStatuses(g)}</td>
                  <td className="px-4 py-2">{renderToggle(g)}</td>
                </tr>
                {openId === g.id && (
                  <tr className="bg-slate-50/70">
                    <td colSpan={4} className="px-4 py-3 text-[12.5px] text-slate-600 leading-relaxed">
                      {g.detail}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: thẻ xếp dọc */}
      <div className="md:hidden space-y-3">
        {groups.map((g) => (
          <div key={g.id} className="rounded-xl border border-slate-200 p-3.5 space-y-2.5">
            <h3 className="text-[13px] font-semibold text-slate-800">{g.name}</h3>
            <div>
              <span className="block text-[11px] text-slate-400 mb-0.5">Nguồn/căn cứ dữ liệu</span>
              <div className="text-[12px] text-slate-600">{renderSources(g)}</div>
            </div>
            <div>
              <span className="block text-[11px] text-slate-400 mb-1">Trạng thái thông tin</span>
              {renderStatuses(g)}
            </div>
            <div className="border-t border-slate-100 pt-1">
              {renderToggle(g)}
              {openId === g.id && (
                <p className="text-[12px] text-slate-600 leading-relaxed pb-1">{g.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className="text-[11px] text-slate-400">
        Các tài liệu SRC-01 đến SRC-04 là tài liệu giả định trong tình huống nghiên cứu.
      </p>
    </section>
  );
};
