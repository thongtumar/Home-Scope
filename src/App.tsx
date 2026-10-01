import React from 'react';
import { Header } from './components/Header';
import { ResearchBriefing } from './components/ResearchBriefing';
import { ProjectHero } from './components/ProjectHero';
import { EnvironmentalClaims } from './components/EnvironmentalClaims';
import { AIAnalysisPanel } from './components/AIAnalysisPanel';
import { Footer } from './components/Footer';
import { 
  ProjectSpec, 
  EnvironmentalClaim, 
  AISourceItem, 
  StepFlow 
} from './types';

export default function App() {
  // 1. PROJECT SPECIFICATION (Realistic & High-Standard)
  const projectSpec: ProjectSpec = {
    name: 'AN PHÚ GREEN RESIDENCE',
    projectType: 'Căn hộ chung cư sinh thái cao cấp',
    unitArea: '62 – 95 m² (2 – 3 Phòng ngủ)',
    scale: '4 tòa tháp / 20 tầng / 1.200 căn hộ',
    status: 'Đang mở bán đợt 1',
    priceNote: '48 – 55 triệu VNĐ/m²',
    description:
      'An Phú Green Residence là tổ hợp căn hộ sinh thái xanh tiêu chuẩn cao cấp tọa lạc tại TP. Thủ Đức, TP. Hồ Chí Minh. Dự án tích hợp hệ thống kính Low-E 2 lớp cản nhiệt, công nghệ tuần hoàn nước mưa cảnh quan, vật liệu thân thiện môi trường và hồ sơ định hướng đạt chứng nhận LOTUS Gold.',
  };

  // 2. ENVIRONMENTAL CLAIMS & CONCRETE USER BENEFITS
  const environmentalClaims: EnvironmentalClaim[] = [
    {
      id: 'ENV-01',
      title: 'Tiết kiệm năng lượng',
      description:
        'Kính hộp Low-E cản nhiệt 2 lớp, 100% đèn LED cảm ứng khu vực công cộng và thiết kế khí động học thông gió đối lưu tự nhiên.',
      userBenefit:
        'Giảm 25% – 30% hóa đơn tiền điện điều hòa hàng tháng (tiết kiệm khoảng 450.000 – 750.000 VNĐ/tháng/căn hộ); không gian sống luôn mát mẻ tự nhiên và giảm bức xạ tia cực tím (UV) có hại.',
      savingEstimate: 'Tiết kiệm 450k – 750k/tháng',
      iconType: 'energy',
    },
    {
      id: 'ENV-02',
      title: 'Quản lý nước',
      description:
        'Thiết bị vệ sinh xả kép tiết kiệm nước chuẩn WaterSense cùng hệ thống thu gom và tuần hoàn nước mưa tự động tưới tiêu cảnh quan nội khu.',
      userBenefit:
        'Giảm 28% – 35% lượng nước sinh hoạt tiêu thụ (tiết kiệm khoảng 120.000 – 200.000 VNĐ/tháng); đồng thời giảm đáng kể phí quản lý vận hành chung cư nhờ nguồn nước tưới cảnh quan tự chủ.',
      savingEstimate: 'Tiết kiệm ~30% tiền nước',
      iconType: 'water',
    },
    {
      id: 'ENV-03',
      title: 'Vật liệu',
      description:
        'Gạch không nung cách âm cách nhiệt, sơn gốc nước VOC cực thấp (< 50g/L), sàn gỗ composite thân thiện môi trường không phát thải Formaldehyde.',
      userBenefit:
        'Bảo vệ tối đa đường hô hấp và sức khỏe cho trẻ nhỏ, phụ nữ mang thai và người cao tuổi; loại bỏ mùi sơn nồng khó chịu khi nhận nhà mới; tăng độ bền vật tư và giảm chi phí sửa chữa dài hạn.',
      savingEstimate: 'An toàn sức khỏe & bền vững',
      iconType: 'material',
    },
    {
      id: 'ENV-04',
      title: 'Tiêu chuẩn / chứng nhận',
      description:
        'Hồ sơ thiết kế định hướng đạt tiêu chuẩn công trình xanh LOTUS Gold (Hội đồng Công trình Xanh Việt Nam) và EDGE Advanced (IFC / Ngân hàng Thế giới).',
      userBenefit:
        'Giúp bất động sản giữ giá và có tính thanh khoản cao hơn 7% – 12% so với căn hộ thông thường; đủ điều kiện vay các gói tín dụng xanh (Green Mortgage) lãi suất ưu đãi giảm 0,5% – 1%/năm từ các ngân hàng đối tác.',
      savingEstimate: 'Tăng 7% - 12% giá trị tài sản',
      iconType: 'certification',
    },
  ];

  // 3. AI SYSTEM PROCESS & FLOW
  const stepFlows: StepFlow[] = [
    {
      step: 1,
      title: 'Thu thập văn bản',
      description: 'Đọc các thông tin trong hồ sơ dự án, brochure và nội dung được cung cấp.',
      details: 'Đọc và trích xuất dữ liệu từ các đoạn văn bản trong tài liệu giới thiệu và tài liệu mô tả kỹ thuật được nộp kèm.',
    },
    {
      step: 2,
      title: 'Nhận diện & đối chiếu',
      description: 'Nhận diện và đối chiếu các nội dung liên quan đến đặc tính môi trường của dự án.',
      details: 'Phân loại các nội dung văn bản theo các chủ đề: Năng lượng, Nước, Vật liệu và Tiêu chuẩn công trình.',
    },
    {
      step: 3,
      title: 'Tổng hợp tóm tắt',
      description: 'Tạo bản tóm tắt để hỗ trợ người xem theo dõi và đánh giá thông tin.',
      details: 'Trình bày bản tóm tắt và câu hỏi mở dựa trên các thông số kỹ thuật được ghi nhận trong tài liệu cung cấp.',
    },
  ];

  // 4. SOURCE PROVENANCE
  const sourceItems: AISourceItem[] = [
    {
      id: 'SRC-01',
      title: 'Brochure dự án An Phú Green Residence',
      format: 'PDF',
      scope: 'Tài liệu giới thiệu tổng quan',
      description: 'Tập tài liệu truyền thông giới thiệu các thông số kỹ thuật, quy mô 4 tòa tháp và các tiện ích sinh thái nội khu.',
    },
    {
      id: 'SRC-02',
      title: 'Hồ sơ giới thiệu & pháp lý quy hoạch',
      format: 'DOCX',
      scope: 'Mô tả pháp lý & quy hoạch 1/500',
      description: 'Tài liệu trình bày các chỉ tiêu quy hoạch kiến trúc, mật độ xây dựng và hạ tầng kỹ thuật bảo vệ môi trường.',
    },
    {
      id: 'SRC-03',
      title: 'Bản giải trình giải pháp kiến trúc xanh',
      format: 'TEXT',
      scope: 'Bản công bố thông số kỹ thuật',
      description: 'Các bản giải trình chi tiết về hệ thống kính Low-E, thông gió đối lưu và tuần hoàn nước mưa do đơn vị thiết kế cung cấp.',
    },
    {
      id: 'SRC-04',
      title: 'Danh mục thiết bị hoàn thiện & vật liệu',
      format: 'SPECS',
      scope: 'Danh mục thiết bị hoàn thiện',
      description: 'Danh mục liệt kê các chủng loại thiết bị vệ sinh WaterSense, kính hộp Low-E và sơn nước VOC thấp.',
    },
    {
      id: 'SRC-05',
      title: 'Hồ sơ đăng ký tiêu chuẩn LOTUS / EDGE',
      format: 'CERT',
      scope: 'Tài liệu tiêu chuẩn môi trường',
      description: 'Phần văn bản ghi nhận hồ sơ đăng ký đánh giá theo bộ tiêu chí LOTUS Gold (VGBC) và chứng chỉ EDGE Advanced.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#2D3748] font-sans antialiased flex flex-col selection:bg-slate-200 selection:text-slate-900">
      
      {/* 1. HEADER (Cleaned without unnecessary menu links) */}
      <Header />

      {/* 2. RESEARCH INSTRUCTION BRIEFING */}
      <ResearchBriefing />

      {/* MAIN RESEARCH CONTENT CONTAINER */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8 space-y-8 sm:space-y-10">
        
        {/* 3. HERO & PROJECT SPECS (Realistic price: 48 - 55 tr/m2) */}
        <ProjectHero spec={projectSpec} />

        {/* 4. VERBAL ENVIRONMENTAL CLAIMS & USER BENEFITS */}
        <EnvironmentalClaims claims={environmentalClaims} />

        {/* 5. AI-SUPPORTED ANALYSIS PANEL & OPEN INQUIRY BOX WITH AI */}
        <AIAnalysisPanel 
          sources={sourceItems} 
          steps={stepFlows} 
        />

      </main>

      {/* 6. FOOTER */}
      <Footer />

    </div>
  );
}
