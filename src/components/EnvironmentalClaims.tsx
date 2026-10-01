import React, { useState } from 'react';
import { Zap, Droplets, Recycle, Award, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { EnvironmentalClaim } from '../types';

interface EnvironmentalClaimsProps {
  claims: EnvironmentalClaim[];
}

export const EnvironmentalClaims: React.FC<EnvironmentalClaimsProps> = ({ claims }) => {
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

  const getExcerpts = (type: EnvironmentalClaim['iconType']) => {
    switch (type) {
      case 'energy':
        return 'Ghi chú hồ sơ: Dự án nêu định hướng giảm thiểu hấp thụ nhiệt qua kính 2 lớp Low-E và bố trí hệ thống chiếu sáng LED tại khu vực chung.';
      case 'water':
        return 'Ghi chú hồ sơ: Đề cập giải pháp tái sử dụng nguồn nước tưới cây cảnh quan và lắp đặt phụ kiện lưu lượng dòng chảy tiết kiệm.';
      case 'material':
        return 'Ghi chú hồ sơ: Nêu định hướng ưu tiên vật liệu xây không nung và sơn gốc nước ít phát thải hợp chất hữu cơ dễ bay hơi.';
      case 'certification':
        return 'Ghi chú hồ sơ: Tài liệu ghi nhận dự án được định hướng theo bộ tiêu chí công trình xanh hiện hành, chưa công bố cấp độ chứng nhận chính thức.';
      default:
        return '';
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
            Thông số kỹ thuật công trình xanh và giá trị tiết kiệm chi phí, lợi ích thực tế đối với người sử dụng.
          </p>
        </div>
        <span className="text-xs text-slate-400 font-medium self-start sm:self-auto">
          4 hạng mục đánh giá
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {claims.map((claim) => {
          const isExpanded = expandedId === claim.id;

          return (
            <div
              key={claim.id}
              className="group bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Title */}
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 group-hover:bg-emerald-50 flex items-center justify-center border border-slate-200/60 group-hover:border-emerald-200 transition-colors">
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

                {/* Direct User Benefits & Cost Savings Box */}
                <div className="mt-3.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-100/90">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-800 uppercase tracking-wide mb-1">
                    <span>Lợi ích người dùng:</span>
                    {claim.savingEstimate && (
                      <span className="bg-emerald-600 text-white text-[9.5px] px-1.5 py-0.2 rounded font-semibold ml-auto normal-case">
                        {claim.savingEstimate}
                      </span>
                    )}
                  </div>
                  <p className="text-[11.5px] text-emerald-950 font-normal leading-relaxed">
                    {claim.userBenefit}
                  </p>
                </div>

                {/* Collapsible technical detail */}
                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500 leading-relaxed bg-slate-50 p-2.5 rounded-lg">
                    {getExcerpts(claim.iconType)}
                  </div>
                )}
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setExpandedId(isExpanded ? null : claim.id)}
                  className="text-[11px] font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{isExpanded ? 'Thu gọn' : 'Xem ghi chú kỹ thuật'}</span>
                  {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
