export interface ProjectSpec {
  name: string;
  projectType: string;
  unitArea: string;
  scale: string;
  status: string;
  priceNote: string;
  description: string;
}

export interface EnvironmentalClaim {
  id: string;
  title: string;
  description: string;
  userBenefit: string;
  savingEstimate?: string;
  iconType: 'energy' | 'water' | 'material' | 'certification';
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

export interface MissingInfoItem {
  id: string;
  title: string;
  category: string;
}

export interface QACheckItem {
  id: string;
  label: string;
  variable: 'AIDT' | 'GTR' | 'PU' | 'PGW' | 'PIN' | 'METHOD';
  passed: boolean;
  explanation: string;
}
