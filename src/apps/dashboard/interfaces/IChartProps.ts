export interface IChartDataset {
  label: string;
  data: any[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  borderWidth?: number;
}

export interface IChartData {
  labels: string[];
  datasets: IChartDataset[];
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
