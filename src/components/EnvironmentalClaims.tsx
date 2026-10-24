import React, { useState } from 'react';
import { Zap, Droplets, Recycle, Award, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { EnvironmentalClaim, InfoGroup } from '../types';
import { StatusChip } from './StatusChip';
import { HowFormed } from './HowFormed';

interface EnvironmentalClaimsProps {
  claims: EnvironmentalClaim[];
  groups: InfoGroup[];
}

export const EnvironmentalClaims: React.FC<EnvironmentalClaimsProps> = ({ claims, groups }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const getIcon = (type: EnvironmentalClaim['iconType']) => {
    switch (type) {
      case 'energy':
        return <Zap className="w-4 h-4 text-slate-700" />;
      case 'water':
        return <Droplets className="w-4 h-4 text-slate-700" />;
      case 'material':
        return <Recycle className="w-4 h-4 text-slate-700" />;
      case 'certification':
        return <Award className="w-4 h-4 text-slate-700" />;
      default:
        return <FileText className="w-4 h-4 text-slate-700" />;
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
        <div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span className="w-1.5 h-4 bg-emerald-600 rounded-sm inline-block"></span>
            Đặc tính môi trường
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Các giải pháp liên quan đến môi trường được nêu trong hồ sơ dự án mô phỏng.
          </p>
        </div>
        <span className="text-xs text-slate-400 font-medium self-start sm:self-auto">
          4 nhóm thông tin
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {claims.map((claim) => {
          const isExpanded = expandedId === claim.id;
          const group = groups.find((g) => g.id === claim.statusGroupId);

          return (
            <div
              key={claim.id}
              className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Title */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200/60">
                    {getIcon(claim.iconType)}
                  </div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                    {claim.id}
                  </span>
                </div>

                <h3 className="font-bold text-sm text-slate-900 mb-1.5">
                  {claim.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {claim.description}
                </p>

                {/* Trạng thái thông tin (lấy từ bảng nguồn dữ liệu) */}
                {group && (
                  <div className="mt-3.5">
                    <span className="block text-[10.5px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                      Trạng thái thông tin
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {group.statuses.map((s) => (
                        <StatusChip key={s} status={s} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Collapsible technical detail */}
                {isExpanded && (
                  <div className="mt-3 text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    {claim.excerpt}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-1.5 border-t border-slate-100 space-y-0.5">
                <button
                  type="button"
                  onClick={() => setExpandedId(isExpanded ? null : claim.id)}
                  aria-expanded={isExpanded}
                  className="min-h-[36px] text-[12px] font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>{isExpanded ? 'Thu gọn' : 'Xem ghi chú kỹ thuật'}</span>
                  {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
                <HowFormed explanation={claim.explanation} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
