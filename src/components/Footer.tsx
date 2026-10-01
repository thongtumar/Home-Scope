import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 sm:mt-24 border-t border-slate-200/90 bg-white py-10 px-4 text-center text-xs text-slate-500 transition-colors">
      <div className="max-w-4xl mx-auto space-y-2">
        <p className="font-medium text-slate-700">
          Dự án, hình ảnh và thông tin trên trang này được xây dựng cho mục đích nghiên cứu học thuật.
        </p>
        <p className="text-[11.5px] text-slate-500 leading-relaxed">
          Đề tài: Tác động của tính minh bạch dữ liệu được hỗ trợ bởi trí tuệ nhân tạo đến ý định mua nhà ở xanh.
        </p>
        <div className="pt-3 text-[11px] text-slate-400 flex items-center justify-center gap-4">
          <span>Hệ thống mô phỏng: HomeScope</span>
          <span aria-hidden="true">·</span>
          <span>Không sử dụng cho mục đích thương mại</span>
          <span aria-hidden="true">·</span>
          <span>© 2026 Academic Research Prototype</span>
        </div>
      </div>
    </footer>
  );
};
