export interface ModelMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
}

export interface ClassMetric {
  className: string;
  precision: number;
  recall: number;
  f1Score: number;
  support: number;
}

export interface ModelData {
  id: string;
  name: string;
  year: number;
  creators: string;
  description: string;
  keyFeatures: string[];
  metrics: ModelMetrics;
  classMetrics: ClassMetric[];
  color: string;
}

export interface CifarClass {
  id: number;
  name: string;
  description: string;
}