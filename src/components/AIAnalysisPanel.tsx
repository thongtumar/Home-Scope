import React, { useState } from 'react';
import { 
  Bot, 
  FileText, 
  Layers, 
  Info, 
  Database, 
  ArrowRight, 
  ChevronRight, 
  Sparkles, 
  SearchCode, 
  BookOpen, 
  FileCheck2, 
  Send,
  Zap,
  Droplets,
  Recycle,
  CircleDashed,
  X 
} from 'lucide-react';
import { AISourceItem, StepFlow, SummaryItem, Explanation, FixedQA } from '../types';
import { HowFormed } from './HowFormed';

interface AIAnalysisPanelProps {
  sources: AISourceItem[];
  steps: StepFlow[];
  summaryItems: SummaryItem[];
  summaryExplanation: Explanation;
  fixedQAs: FixedQA[];
  fixedFreeTextAnswer: string;
}

const summaryIcon = (icon: SummaryItem['icon']) => {
  switch (icon) {
    case 'energy':
      return <Zap className="w-3 h-3" />;
    case 'water':
      return <Droplets className="w-3 h-3" />;
    case 'material':
      return <Recycle className="w-3 h-3" />;
    default:
      return <CircleDashed className="w-3 h-3" />;
  }
};

export const AIAnalysisPanel: React.FC<AIAnalysisPanelProps> = ({
  sources,
  steps,
  summaryItems,
  summaryExplanation,
  fixedQAs,
  fixedFreeTextAnswer,
}) => {
  const [selectedSource, setSelectedSource] = useState<AISourceItem | null>(null);
  const [activeStepTab, setActiveStepTab] = useState<number>(1);

  // Open inquiry: answers are pre-written and identical for every respondent
  // (no AI call, no randomness, nothing is stored or sent).
  const [question, setQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);

  const handleAsk = (qText?: string) => {
    const query = (qText ?? question).trim();
    if (!query) return;
    if (qText) setQuestion(qText);
    const match = fixedQAs.find((qa) => qa.question === query);
    setAiAnswer(match ? match.answer : fixedFreeTextAnswer);
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 relative overflow-hidden transition-all space-y-7">
      {/* AI Header Area - Professional, Neutral, Tech-Slate palette (avoiding green bias) */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-slate-100 gap-3">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-2.5 rounded-xl bg-slate-900 text-white shadow-xs">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Phân tích hỗ trợ bởi AI
              </h2>
              <span className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                Tính năng hỗ trợ tra cứu
              </span>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed">
              Hệ thống tổng hợp các thông tin được cung cấp trong hồ sơ dự án để hỗ trợ người xem xem xét các đặc tính liên quan đến môi trường.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7">
        
        {/* Left Column: 5.1 Tóm tắt kết quả & 5.2 Cách hệ thống tạo kết quả */}
        <div className="lg:col-span-7 space-y-7">
          
          {/* 5.1 TÓM TẮT KẾT QUẢ (AIDT Outcome Dimension) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-500" />
                Tóm tắt kết quả ghi nhận
              </h3>
              <span className="text-[11px] text-slate-400">Theo các danh mục trong tài liệu</span>
            </div>

            <div className="space-y-3">
              {summaryItems.map((item) => (
                <div key={item.id} className="flex items-start gap-3 p-3.5 bg-slate-50/90 rounded-xl border border-slate-100/90">
                  <div className="w-5 h-5 rounded-md bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-600 shadow-2xs">
                    {summaryIcon(item.icon)}
                  </div>
                  <p className="text-xs sm:text-[12.5px] leading-relaxed text-slate-700">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-2 px-1">
              <HowFormed explanation={summaryExplanation} />
            </div>
          </div>

          {/* 5.2 CÁCH HỆ THỐNG TẠO KẾT QUẢ (AIDT Process Dimension) */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 flex items-center gap-2">
                <SearchCode className="w-4 h-4 text-slate-500" />
                Cách hệ thống tạo kết quả
              </h3>
              <span className="text-[11px] text-slate-400">Quy trình mô phỏng 3 bước</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {steps.map((st) => (
                <button
                  type="button"
                  key={st.step}
                  onClick={() => setActiveStepTab(st.step)}
                  aria-pressed={activeStepTab === st.step}
                  className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeStepTab === st.step
                      ? 'bg-slate-50 border-slate-400 shadow-xs'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold ${
                        activeStepTab === st.step
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {st.step}
                    </span>
                    <span className="text-[11px] font-medium text-slate-400">Bước {st.step}</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 mb-1">{st.title}</h4>
                  <p className="text-[11.5px] text-slate-600 leading-relaxed">
                    {st.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Active Step Details Expander */}
            <div className="mt-3 p-3 bg-slate-50/80 rounded-xl border border-slate-200/80 text-xs text-slate-600 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-800">
                  Chi tiết bước {activeStepTab}:
                </span>{' '}
                {steps.find((s) => s.step === activeStepTab)?.details}
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: 5.3 Nguồn thông tin & 5.4 Thông tin cần lưu ý */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* 5.3 NGUỒN THÔNG TIN ĐƯỢC HỆ THỐNG SỬ DỤNG (Source Provenance Display - AIDT4) */}
          <div className="bg-slate-50/90 p-5 rounded-2xl border border-slate-200/90 flex-1">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-600 flex items-center gap-2">
                <Layers className="w-4 h-4 text-slate-500" />
                Nguồn thông tin được hệ thống sử dụng
              </h3>
              <span className="text-[10.5px] text-slate-500 font-medium">HỒ SƠ GỐC</span>
            </div>
            <p className="text-[11.5px] text-slate-500 mb-3.5 leading-relaxed">
              Các tài liệu giả định trong bộ hồ sơ mô phỏng (không phân loại là nguồn đã xác thực):
            </p>

            <div className="space-y-2">
              {sources.map((src) => (
                <button
                  type="button"
                  key={src.id}
                  onClick={() => setSelectedSource(src)}
                  className="group w-full text-left flex items-center justify-between p-2.5 bg-white border border-slate-200 rounded-lg hover:border-slate-400 hover:bg-slate-50/90 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500 shrink-0 group-hover:text-slate-900" />
                    <span className="text-xs font-medium text-slate-800 group-hover:text-slate-950 truncate transition-colors">
                      {src.id} · {src.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-[10px] text-slate-400 font-mono bg-slate-50 group-hover:bg-white group-hover:text-slate-600 px-1.5 py-0.5 rounded border border-slate-100 group-hover:border-slate-200 transition-colors">
                      {src.format}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-800" />
                  </div>
                </button>
              ))}
            </div>

            <p className="text-[10.5px] text-slate-400 italic mt-3">
              * Nhấp vào từng tài liệu để xem phạm vi thông tin được trích xuất.
            </p>
          </div>

          {/* 5.4 THÔNG TIN CẦN LƯU Ý */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <div className="flex items-start gap-3">
              <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <span className="font-semibold block mb-1 text-slate-800">
                  Thông tin cần lưu ý:
                </span>
                Bản phân tích nhằm hỗ trợ người xem theo dõi nhanh những thông tin có trong tài liệu được cung cấp. Một số nội dung chưa có dữ liệu kiểm chứng độc lập trong bộ tài liệu hiện có.
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* CÂU HỎI MỞ & HỘP TRA CỨU GẮN VỚI AI (Interactive Open Inquiry AI Box) */}
      {/* ========================================================================= */}
      <div className="mt-8 pt-6 border-t border-slate-200">
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 rounded-2xl p-5 sm:p-6 text-white shadow-md border border-slate-700/80">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-700/80">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  Câu hỏi mở
                  <span className="text-[10px] font-semibold uppercase bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30">
                    Câu trả lời minh họa
                  </span>
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Câu trả lời trong khung này được soạn sẵn cho tình huống nghiên cứu và giống nhau với mọi đáp viên. Nội dung nhập không được lưu lại.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="my-4">
            <span className="text-[11px] text-slate-400 block mb-2 font-medium">
              Gợi ý câu hỏi thường gặp:
            </span>
            <div className="flex flex-wrap gap-2">
              {fixedQAs.map(({ question: sq }, sIdx) => (
                <button
                  key={sIdx}
                  type="button"
                  onClick={() => handleAsk(sq)}
                  className="text-[11.5px] bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white px-3 py-1.5 rounded-lg border border-slate-600/80 transition-all text-left cursor-pointer"
                >
                  {sq}
                </button>
              ))}
            </div>
          </div>

          {/* Inquiry Input Box */}
          <div className="relative mt-2">
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAsk()}
                placeholder="Nhập câu hỏi của bạn về thông tin dự án..."
                className="flex-1 px-4 py-3 bg-slate-950/70 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-emerald-400 transition-colors"
              />
              <button
                type="button"
                onClick={() => handleAsk()}
                disabled={!question.trim()}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0 shadow-sm"
              >
                <Send className="w-4 h-4" />
                <span>Xem câu trả lời</span>
              </button>
            </div>
          </div>

          {/* AI Response Display Box */}
          {aiAnswer && (
            <div className="mt-4 p-4 rounded-xl bg-slate-950/80 border border-emerald-500/40 text-xs sm:text-[13px] leading-relaxed">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                <Bot className="w-4 h-4" />
                <span>Phản hồi của hệ thống (nội dung minh họa):</span>
              </div>
              <p className="text-slate-200 leading-relaxed">
                {aiAnswer}
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-800 text-[10.5px] text-slate-400 flex flex-wrap items-center justify-between gap-2">
                <span>Dựa trên bộ hồ sơ mô phỏng SRC-01 đến SRC-04</span>
                <span className="text-slate-400">Câu trả lời soạn sẵn, không tạo theo thời gian thực</span>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Source Provenance Modal / Inspector */}
      {selectedSource && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div role="dialog" aria-modal="true" className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-slate-700" />
                <h3 className="font-bold text-sm text-slate-900">Chi tiết nguồn dữ liệu</h3>
              </div>
              <button
                onClick={() => setSelectedSource(null)}
                aria-label="Đóng"
                className="p-2 rounded-md text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-4 space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block text-[11px]">Tên tài liệu</span>
                <p className="font-semibold text-slate-800 text-sm mt-0.5">{selectedSource.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 py-2 border-y border-slate-100">
                <div>
                  <span className="text-slate-400 block text-[11px]">Định dạng tệp</span>
                  <span className="font-mono text-slate-700">{selectedSource.format}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Phạm vi trích xuất</span>
                  <span className="text-slate-700">{selectedSource.scope}</span>
                </div>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px]">Mô tả nội dung sử dụng</span>
                <p className="text-slate-600 leading-relaxed mt-1">
                  {selectedSource.description}
                </p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-[11.5px] text-slate-500">
                Lưu ý: Đây là tài liệu giả định trong tình huống nghiên cứu. Hệ thống không xác thực tính đúng sai của tài liệu với các cơ quan kiểm định độc lập bên ngoài.
              </div>
            </div>

            <div className="mt-5 flex justify-end">
              <button
                onClick={() => setSelectedSource(null)}
                className="px-4 py-2 text-xs font-medium bg-slate-900 hover:bg-slate-800 text-white rounded-lg transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
