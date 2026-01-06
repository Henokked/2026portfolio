
export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  caption?: string;
  tags: string[];
  image: string;
  gallery?: string[];
  description: string;
  company: string;
  companyLogo?: string;
  metrics?: CaseStudyMetric[];
  features?: string[];
  impact?: string[];
  conclusion?: string;
  dashboardCaption?: string;
  // Per-project metadata (optional)
  industry?: string;
  date?: string;
  tools?: string[];
  services?: string[];
}  


export interface Experience {
  company: string;
  period: string;
  role: string;
  type: string;
  team: string;
  projects: string[];
  scope: string[];
}