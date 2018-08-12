import Charts from "vue-chartjs";

interface IChart {
  mixins: any[];
  props: string[];
  chartData?: any;
  options?: any;
  mounted(): void;
  renderChart?: (chartData: any, options: any) => void;
}

export const Chart: IChart = {
  mixins: [
    Charts.mixins.reactiveProp
    // Charts.mixins.reactiveData
  ],
  props: ["chartData", "options"],
  mounted() {
    this.renderChart && this.renderChart(this.chartData, this.options);
  }
};

export const Bar = {
  extends: Charts.Bar,
  ...Chart
};

export const HorizontalBar = {
  extends: Charts.HorizontalBar,
  ...Chart
};

export const Line = {
  extends: Charts.Line,
  ...Chart
};

export const Doughnut = {
  extends: Charts.Doughnut,
  ...Chart
};

export const Pie = {
  extends: Charts.Pie,
  ...Chart
};

export const Radar = {
  extends: Charts.Radar,
  ...Chart
};

export const PolarArea = {
  extends: Charts.PolarArea,
  ...Chart
};

export const Bubble = {
  extends: Charts.Bubble,
  ...Chart
};

export const Scatter = {
  extends: Charts.Scatter,
  ...Chart
};
