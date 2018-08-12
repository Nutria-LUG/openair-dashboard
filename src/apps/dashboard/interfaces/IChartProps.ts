export interface IChartDataset {
  label: string;
  data: any[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
  type?: string;
}

export interface IChartData {
  datasets: IChartDataset[];
  labels?: string[];
}

export interface IChartOptions {
  responsive?: boolean;
  mantainAspectRatio?: boolean;
}

export interface IChartProps {
  title: string;
  data: IChartData;
  options: IChartOptions;
}
