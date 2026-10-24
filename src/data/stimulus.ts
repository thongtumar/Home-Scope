// =============================================================================
// BỘ DỮ LIỆU MÔ PHỎNG CỐ ĐỊNH (STIMULUS DATASET)
// -----------------------------------------------------------------------------
// Toàn bộ nội dung hiển thị về dự án được khai báo tại đây để nhóm nghiên cứu dễ
// kiểm tra và hiệu chỉnh. Nội dung là tĩnh: không ngẫu nhiên, không cá nhân hóa,
// không gọi dịch vụ AI bên ngoài. Mọi đáp viên nhìn thấy cùng một nội dung.
// Khi chỉnh sửa nội dung, hãy tăng STIMULUS_VERSION.
// =============================================================================

import {
  ProjectSpec,
  EnvironmentalClaim,
  AISourceItem,
  StepFlow,
  InfoGroup,
  Explanation,
  SummaryItem,
  ReferenceStandard,
  FixedQA,
} from '../types';

export const STIMULUS_VERSION = 'Stimulus V1.1';

export const NO_CERTIFICATION_NOTE =
  'Chưa có tài liệu chứng nhận công trình xanh được cung cấp trong tình huống mô phỏng.';

// 1. THÔNG TIN CHUNG VỀ DỰ ÁN
// Vị trí, diện tích, giá bán và trạng thái mở bán được lược bỏ có chủ đích để
// không chi phối đánh giá của đáp viên (xem phần hướng dẫn đầu trang).
export const projectSpec: ProjectSpec = {
  name: 'AN PHÚ GREEN RESIDENCE',
  code: 'APG-2026',
  projectType: 'Căn hộ chung cư định hướng nhà ở xanh',
  scale: '4 tòa tháp / 20 tầng',
  description:
    'An Phú Green Residence là dự án căn hộ chung cư mô phỏng, được giới thiệu theo định hướng nhà ở xanh. Tài liệu giới thiệu của dự án có đề cập đến kính hộp Low-E hai lớp, thu gom nước mưa để tưới cảnh quan và một số vật liệu ít phát thải.',
};

// 2. NGUỒN TÀI LIỆU TRONG BỘ HỒ SƠ MÔ PHỎNG
// Đây là các tài liệu giả định của tình huống nghiên cứu, không phải tệp thật.
export const sourceItems: AISourceItem[] = [
  {
    id: 'SRC-01',
    title: 'Brochure dự án An Phú Green Residence',
    format: 'PDF',
    scope: 'Tài liệu giới thiệu tổng quan',
    description:
      'Tài liệu truyền thông do chủ đầu tư phát hành, giới thiệu quy mô 4 tòa tháp, tiện ích nội khu và định hướng nhà ở xanh của dự án.',
  },
  {
    id: 'SRC-02',
    title: 'Hồ sơ giới thiệu quy hoạch kiến trúc',
    format: 'DOCX',
    scope: 'Mô tả quy hoạch & hạ tầng kỹ thuật',
    description:
      'Tài liệu trình bày chỉ tiêu quy hoạch kiến trúc, mật độ xây dựng và hạ tầng kỹ thuật liên quan đến môi trường.',
  },
  {
    id: 'SRC-03',
    title: 'Bản giải trình giải pháp kiến trúc xanh',
    format: 'TEXT',
    scope: 'Mô tả giải pháp thiết kế',
    description:
      'Bản mô tả của đơn vị thiết kế về kính Low-E, thông gió tự nhiên, chiếu sáng LED và thu gom nước mưa. Không kèm số liệu tính toán năng lượng hoặc nước.',
  },
  {
    id: 'SRC-04',
    title: 'Danh mục thiết bị hoàn thiện & vật liệu',
    format: 'SPECS',
    scope: 'Danh mục thiết bị hoàn thiện',
    description:
      'Danh mục liệt kê chủng loại thiết bị vệ sinh, kính hộp Low-E, gạch không nung, sơn gốc nước và sàn gỗ composite. Thông số do nhà cung cấp công bố.',
  },
];

// 3. CÁC NHÓM ĐẶC TÍNH MÔI TRƯỜNG (thẻ thông tin + phần giải thích)
// Không hiển thị số liệu tiết kiệm vì bộ hồ sơ không có tài liệu đối chiếu.
export const environmentalClaims: EnvironmentalClaim[] = [
  {
    id: 'ENV-01',
    title: 'Sử dụng năng lượng',
    description:
      'Kính hộp Low-E hai lớp, đèn LED cảm ứng tại khu vực công cộng và thiết kế thông gió tự nhiên.',
    excerpt:
      'Ghi chú hồ sơ: Dự án nêu định hướng giảm hấp thụ nhiệt qua kính hai lớp Low-E và bố trí chiếu sáng LED tại khu vực chung.',
    iconType: 'energy',
    statusGroupId: 'energy',
    explanation: {
      input:
        'Bản giải trình giải pháp kiến trúc xanh (SRC-03) và danh mục thiết bị (SRC-04) trong bộ hồ sơ mô phỏng.',
      process:
        'Nội dung thẻ là bản tóm tắt soạn sẵn các giải pháp mà tài liệu có nêu. Đây là kết quả minh họa cố định; hệ thống không tính toán hay đo đạc khi bạn xem trang.',
      limits:
        'Chưa có số liệu tiêu thụ điện, kết quả mô phỏng năng lượng hoặc đo đạc sau vận hành. Vì vậy thẻ không nêu mức tiết kiệm.',
    },
  },
  {
    id: 'ENV-02',
    title: 'Sử dụng nước',
    description:
      'Thiết bị vệ sinh xả kép, vòi lưu lượng thấp và hệ thống thu gom nước mưa để tưới cảnh quan nội khu.',
    excerpt:
      'Ghi chú hồ sơ: Đề cập giải pháp tái sử dụng nước mưa để tưới cây cảnh quan và lắp đặt thiết bị giảm lưu lượng nước.',
    iconType: 'water',
    statusGroupId: 'water',
    explanation: {
      input:
        'Bản giải trình giải pháp kiến trúc xanh (SRC-03) và danh mục thiết bị vệ sinh (SRC-04) trong bộ hồ sơ mô phỏng.',
      process:
        'Nội dung thẻ là bản tóm tắt soạn sẵn các giải pháp về nước mà tài liệu có nêu. Đây là kết quả minh họa cố định, không phải kết quả tính toán.',
      limits:
        'Chưa có số liệu lượng nước tiêu thụ, dung tích bể thu nước mưa hoặc đo đạc thực tế. Thẻ không nêu mức tiết kiệm nước.',
    },
  },
  {
    id: 'ENV-03',
    title: 'Vật liệu xây dựng',
    description:
      'Gạch không nung, sơn gốc nước có hàm lượng VOC công bố dưới 50 g/L và sàn gỗ composite được mô tả là ít phát thải formaldehyde.',
    excerpt:
      'Ghi chú hồ sơ: Nêu định hướng ưu tiên vật liệu xây không nung và sơn gốc nước ít phát thải hợp chất hữu cơ dễ bay hơi (VOC).',
    iconType: 'material',
    statusGroupId: 'materials',
    explanation: {
      input:
        'Danh mục thiết bị hoàn thiện & vật liệu (SRC-04) trong bộ hồ sơ mô phỏng.',
      process:
        'Thẻ liệt kê lại các loại vật liệu và thông số do nhà cung cấp công bố trong danh mục. Đây là nội dung minh họa soạn sẵn, không có bước kiểm tra hay so sánh tự động.',
      limits:
        'Chưa có phiếu kiểm nghiệm vật liệu hoặc đánh giá của bên thứ ba. Mức VOC và formaldehyde là thông số công bố, chưa được kiểm chứng độc lập.',
    },
  },
  {
    id: 'ENV-04',
    title: 'Tiêu chuẩn / chứng nhận',
    description:
      'Brochure dự án nêu định hướng tham khảo các bộ tiêu chí công trình xanh, nhưng không nêu tên chứng nhận hay cấp độ cụ thể.',
    excerpt: NO_CERTIFICATION_NOTE,
    iconType: 'certification',
    statusGroupId: 'certification',
    explanation: {
      input:
        'Phần giới thiệu định hướng trong brochure dự án (SRC-01). Bộ hồ sơ không có tài liệu đăng ký hoặc giấy chứng nhận công trình xanh.',
      process:
        'Thẻ chỉ ghi lại câu chữ trong brochure. Đây là nội dung minh họa soạn sẵn; hệ thống không tra cứu cơ sở dữ liệu của tổ chức cấp chứng nhận.',
      limits:
        'Không có mã chứng chỉ, cấp độ hay kết quả đánh giá nào được cung cấp. Không thể xác nhận dự án đã đăng ký hoặc đạt chứng nhận công trình xanh.',
    },
  },
];

// 4. BẢNG "NGUỒN DỮ LIỆU & TRẠNG THÁI THÔNG TIN"
export const infoGroups: InfoGroup[] = [
  {
    id: 'design',
    name: 'Thiết kế và đặc điểm công trình',
    sourceIds: ['SRC-01', 'SRC-02', 'SRC-03'],
    statuses: ['simulated', 'reference', 'notIndependent'],
    detail:
      'Thông tin về quy mô, thông gió tự nhiên và mặt đứng công trình lấy từ brochure, hồ sơ quy hoạch và bản giải trình thiết kế trong tình huống mô phỏng. Chưa có biên bản nghiệm thu hoặc đánh giá của bên thứ ba.',
  },
  {
    id: 'energy',
    name: 'Sử dụng năng lượng',
    sourceIds: ['SRC-03', 'SRC-04'],
    statuses: ['simulated', 'reference', 'noCrossCheck'],
    detail:
      'Tài liệu mô tả các giải pháp (kính Low-E, đèn LED, thông gió tự nhiên). Chưa cung cấp thông tin về mức tiêu thụ hoặc mức tiết kiệm điện, nên không có số liệu ước tính để đối chiếu.',
  },
  {
    id: 'water',
    name: 'Sử dụng nước',
    sourceIds: ['SRC-03', 'SRC-04'],
    statuses: ['simulated', 'reference', 'noCrossCheck'],
    detail:
      'Tài liệu mô tả thiết bị vệ sinh tiết kiệm nước và hệ thống thu gom nước mưa. Chưa cung cấp thông tin về lượng nước tiêu thụ hoặc mức tiết kiệm nước.',
  },
  {
    id: 'materials',
    name: 'Vật liệu xây dựng',
    sourceIds: ['SRC-04'],
    statuses: ['simulated', 'reference', 'notIndependent'],
    detail:
      'Danh mục vật liệu liệt kê chủng loại và thông số do nhà cung cấp công bố (ví dụ: VOC dưới 50 g/L). Chưa có phiếu kiểm nghiệm hoặc đánh giá độc lập.',
  },
  {
    id: 'certification',
    name: 'Tiêu chuẩn và chứng nhận công trình xanh',
    sourceIds: [],
    statuses: ['noCrossCheck'],
    detail: `${NO_CERTIFICATION_NOTE} Brochure chỉ nêu định hướng tham khảo tiêu chí công trình xanh, không nêu tên hay cấp độ chứng nhận.`,
  },
];

// 5. QUY TRÌNH HỆ THỐNG TRONG TÌNH HUỐNG MÔ PHỎNG
export const stepFlows: StepFlow[] = [
  {
    step: 1,
    title: 'Thu thập văn bản',
    description: 'Đọc các thông tin trong hồ sơ dự án, brochure và nội dung được cung cấp.',
    details:
      'Trích xuất nội dung từ tài liệu giới thiệu và tài liệu mô tả kỹ thuật được nộp kèm (SRC-01 đến SRC-04).',
  },
  {
    step: 2,
    title: 'Nhận diện & đối chiếu',
    description: 'Nhận diện và đối chiếu các nội dung liên quan đến đặc tính môi trường của dự án.',
    details:
      'Phân loại nội dung theo các nhóm: Thiết kế, Năng lượng, Nước, Vật liệu và Tiêu chuẩn/chứng nhận; ghi nhận nhóm nào chưa có tài liệu.',
  },
  {
    step: 3,
    title: 'Tổng hợp tóm tắt',
    description: 'Tạo bản tóm tắt để hỗ trợ người xem theo dõi và đánh giá thông tin.',
    details:
      'Trình bày bản tóm tắt dựa trên các nội dung có trong tài liệu, kèm theo những thông tin còn thiếu.',
  },
];

// 6. TÓM TẮT KẾT QUẢ GHI NHẬN (khung phân tích hỗ trợ bởi AI)
export const summaryItems: SummaryItem[] = [
  {
    id: 'SUM-01',
    icon: 'energy',
    text: 'Hồ sơ dự án có đề cập đến các giải pháp hỗ trợ tiết kiệm năng lượng và tận dụng ánh sáng, thông gió tự nhiên.',
  },
  {
    id: 'SUM-02',
    icon: 'water',
    text: 'Hồ sơ dự án có đề cập đến thiết bị tiết kiệm nước và thu gom nước mưa để tưới cảnh quan.',
  },
  {
    id: 'SUM-03',
    icon: 'material',
    text: 'Danh mục vật liệu có liệt kê gạch không nung, sơn gốc nước và sàn gỗ composite kèm thông số do nhà cung cấp công bố.',
  },
  {
    id: 'SUM-04',
    icon: 'missing',
    text: 'Bộ hồ sơ chưa có số liệu tiêu thụ hoặc tiết kiệm điện, nước, và chưa có tài liệu chứng nhận công trình xanh.',
  },
];

export const summaryExplanation: Explanation = {
  input:
    'Bốn tài liệu trong bộ hồ sơ mô phỏng (SRC-01 đến SRC-04): brochure, hồ sơ quy hoạch, bản giải trình thiết kế và danh mục vật liệu.',
  process:
    'Mỗi ý tóm tắt tương ứng với một nhóm thông tin và chỉ nhắc lại nội dung tài liệu có nêu. Các ý này được soạn sẵn cho tình huống nghiên cứu, không được tạo tự động khi bạn xem trang.',
  limits:
    'Tài liệu chủ yếu do chủ đầu tư và đơn vị thiết kế cung cấp. Chưa có số liệu đo đạc, kiểm chứng độc lập hoặc tài liệu chứng nhận.',
};

// 7. TIÊU CHUẨN CÔNG TRÌNH XANH THAM KHẢO (chỉ giới thiệu, không gắn với dự án)
export const referenceStandards: ReferenceStandard[] = [
  {
    id: 'LEED',
    name: 'LEED',
    fullName: 'Leadership in Energy and Environmental Design',
    description:
      'Hệ thống đánh giá công trình xanh do Hội đồng Công trình Xanh Hoa Kỳ (USGBC) phát triển, được sử dụng ở nhiều quốc gia.',
    url: 'https://www.usgbc.org/leed',
    urlLabel: 'usgbc.org/leed',
  },
  {
    id: 'LOTUS',
    name: 'LOTUS',
    fullName: 'Hệ thống đánh giá công trình xanh tại Việt Nam',
    description:
      'Hệ thống đánh giá do Hội đồng Công trình Xanh Việt Nam (VGBC) phát triển, phù hợp với điều kiện khí hậu và xây dựng tại Việt Nam.',
    url: 'https://vgbc.vn/lotus/',
    urlLabel: 'vgbc.vn/lotus',
  },
];

// 8. CÂU HỎI MỞ – CÂU TRẢ LỜI SOẠN SẴN (cố định cho mọi đáp viên)
export const fixedQAs: FixedQA[] = [
  {
    question: 'Dự án đã có chứng nhận LOTUS hoặc LEED chưa?',
    answer: `${NO_CERTIFICATION_NOTE} Brochure chỉ nêu định hướng tham khảo tiêu chí công trình xanh, không nêu tên hay cấp độ chứng nhận.`,
  },
  {
    question: 'Có số liệu về mức tiết kiệm điện, nước không?',
    answer:
      'Bộ hồ sơ mô tả các giải pháp như kính Low-E, đèn LED, thiết bị vệ sinh tiết kiệm nước và thu gom nước mưa, nhưng chưa cung cấp số liệu tiêu thụ hoặc mức tiết kiệm điện, nước.',
  },
  {
    question: 'Thông tin về vật liệu dựa trên tài liệu nào?',
    answer:
      'Thông tin vật liệu lấy từ Danh mục thiết bị hoàn thiện & vật liệu (SRC-04). Các thông số như hàm lượng VOC do nhà cung cấp công bố và chưa được kiểm chứng độc lập.',
  },
  {
    question: 'Các thông tin đã được kiểm chứng độc lập chưa?',
    answer:
      'Chưa. Các tài liệu trong bộ hồ sơ do chủ đầu tư, đơn vị thiết kế và nhà cung cấp phát hành. Chưa có đánh giá của bên thứ ba hoặc số liệu đo đạc sau vận hành.',
  },
];

export const fixedFreeTextAnswer =
  'Trong tình huống mô phỏng này, các câu hỏi nhập tự do đều nhận cùng một câu trả lời soạn sẵn. Hệ thống chỉ trình bày nội dung có trong bộ hồ sơ dự án (SRC-01 đến SRC-04); anh/chị có thể xem bảng "Nguồn dữ liệu & trạng thái thông tin" để biết nhóm thông tin nào có tài liệu tham khảo và nhóm nào chưa có tài liệu đối chiếu.';
