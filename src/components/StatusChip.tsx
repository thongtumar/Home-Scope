import React from 'react';
import { InfoStatus } from '../types';

export const STATUS_LABELS: Record<InfoStatus, string> = {
  simulated: 'Thông tin mô phỏng',
  estimated: 'Số liệu ước tính',
  reference: 'Có tài liệu tham khảo',
  noCrossCheck: 'Chưa có tài liệu đối chiếu',
  notIndependent: 'Chưa được kiểm chứng độc lập',
};

// Màu trung tính, chỉ đủ để phân biệt; không dùng màu cảnh báo hay biểu tượng xác nhận
const STATUS_STYLES: Record<InfoStatus, string> = {
  simulated: 'bg-slate-100 text-slate-700 border-slate-200',
  estimated: 'bg-slate-100 text-slate-700 border-slate-200',
  reference: 'bg-emerald-50 text-emerald-800 border-emerald-200',
  noCrossCheck: 'bg-white text-slate-600 border-slate-300 border-dashed',
  notIndependent: 'bg-white text-slate-600 border-slate-300 border-dashed',
};

export const StatusChip: React.FC<{ status: InfoStatus }> = ({ status }) => (
  <span
    className={`inline-block text-[11px] font-medium leading-tight px-2 py-1 rounded-md border ${STATUS_STYLES[status]}`}
  >
    {STATUS_LABELS[status]}
  </span>
);
