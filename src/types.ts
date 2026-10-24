export interface ProjectSpec {
  name: string;
  code: string;
  projectType: string;
  scale: string;
  description: string;
}

// Phần giải thích "Kết quả này được hình thành như thế nào?"
export interface Explanation {
  input: string;
  process: string;
  limits: string;
}

export interface EnvironmentalClaim {
  id: string;
  title: string;
  description: string;
  excerpt: string;
  iconType: 'energy' | 'water' | 'material' | 'certification';
  statusGroupId: InfoGroup['id'];
  explanation: Explanation;
}

export interface AISourceItem {
  id: string;
  title: string;
  format: string;
  scope: string;
  description: string;
}

export interface StepFlow {
  step: number;
  title: string;
  description: string;
  details: string;
}

// Nhãn trạng thái trung tính (không có nhãn "Đã xác minh")
export type InfoStatus =
  | 'simulated'
  | 'estimated'
  | 'reference'
  | 'noCrossCheck'
  | 'notIndependent';

export interface InfoGroup {
  id: 'design' | 'energy' | 'water' | 'materials' | 'certification';
  name: string;
  // Danh sách rỗng nghĩa là chưa cung cấp thông tin nguồn
  sourceIds: string[];
  statuses: InfoStatus[];
  detail: string;
}

export interface SummaryItem {
  id: string;
  icon: 'energy' | 'water' | 'material' | 'missing';
  text: string;
}

export interface ReferenceStandard {
  id: string;
  name: string;
  fullName: string;
  description: string;
  url: string;
  urlLabel: string;
}

export interface FixedQA {
  question: string;
  answer: string;
}
