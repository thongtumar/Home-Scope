import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { ReferenceStandard } from '../types';

interface GreenStandardsReferenceProps {
  standards: ReferenceStandard[];
  noCertificationNote: string;
}

export const GreenStandardsReference: React.FC<GreenStandardsReferenceProps> = ({
  standards,
  noCertificationNote,
}) => {
  return (
    <section className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-6 space-y-4">
      <div>
        <h2 className="text-sm sm:text-base font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-slate-500" />
          Tiêu chuẩn công trình xanh tham khảo
        </h2>
        <p className="text-xs sm:text-[13px] text-slate-600 mt-1.5 leading-relaxed">
          Các hệ thống đánh giá công trình xanh có thể bao gồm những bộ tiêu chí dưới đây. Mục này chỉ nhằm giới thiệu chung; việc liệt kê không có nghĩa dự án đã đăng ký hoặc đạt các chứng nhận này.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {standards.map((s) => (
          <div key={s.id} className="rounded-xl border border-slate-200 bg-slate-50/60 p-3.5">
            <h3 className="text-[13px] font-semibold text-slate-800">
              {s.name} <span className="font-normal text-slate-500">– {s.fullName}</span>
            </h3>
            <p className="text-[12px] text-slate-600 leading-relaxed mt-1">{s.description}</p>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 min-h-[32px] text-[12px] text-slate-700 underline underline-offset-2 hover:text-slate-900"
            >
              Trang thông tin chính thức: {s.urlLabel}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-dashed border-slate-300 p-3.5 text-[12.5px] text-slate-700 leading-relaxed">
        <span className="font-semibold">Đối với dự án trong tình huống này:</span> {noCertificationNote}
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        HomeScope là giao diện mô phỏng phục vụ nghiên cứu học thuật, không có quan hệ hợp tác và không được bảo trợ bởi các tổ chức nêu trên.
      </p>
    </section>
  );
};
