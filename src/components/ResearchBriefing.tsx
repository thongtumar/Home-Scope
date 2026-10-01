import React from 'react';
import { BookOpen } from 'lucide-react';

export const ResearchBriefing: React.FC = () => {
  return (
    <section className="bg-white border-b border-slate-200/90 py-4 sm:py-5 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-4 sm:p-6 text-slate-700 shadow-2xs">
          <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-slate-200/80">
            <div className="w-6 h-6 rounded-lg bg-slate-200/80 flex items-center justify-center text-slate-800 shrink-0">
              <BookOpen className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
              Hướng dẫn trước khi xem giao diện:
            </h2>
          </div>

          <div className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed text-slate-600">
            <p>
              Anh/chị đang tìm hiểu một dự án căn hộ để cân nhắc mua trong thời gian tới. Hãy giả định dự án nằm tại khu vực anh/chị đang quan tâm, và các yếu tố cơ bản như vị trí, diện tích căn hộ và mức giá phù hợp với nhu cầu cũng như khả năng tài chính của anh/chị.
            </p>
            <p>
              Dự án được giới thiệu theo định hướng nhà ở xanh. Trong quá trình tìm hiểu, anh/chị được sử dụng một công cụ có ứng dụng trí tuệ nhân tạo (AI) để tổng hợp và trình bày các thông tin liên quan đến đặc tính môi trường của dự án. “Đặc tính xanh” trong tình huống này bao gồm các thông tin như giải pháp tiết kiệm năng lượng và nước, chứng nhận/công nhận công trình xanh, vật liệu và một số thông tin về hiệu suất môi trường.
            </p>
            <p className="font-medium text-slate-800 pt-0.5">
              Vui lòng xem giao diện minh họa dưới đây như thể anh/chị đang sử dụng công cụ này để tìm hiểu dự án. Sau đó, hãy trả lời các câu hỏi dựa trên những gì anh/chị vừa xem. Không có câu trả lời đúng hay sai; nghiên cứu quan tâm đến đánh giá của riêng anh/chị.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
