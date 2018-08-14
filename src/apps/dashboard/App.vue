<template>
  <div>
    <h1>Dashboard</h1>
    <div v-if="!datasets.length">Loading...</div>
    <div id="charts" v-if="datasets.length">
      <Bar class="chart" :chartData="getChartData(['Umidity'], 'Bar')" :options="options" />
      <LineChart class="chart" :chartData="getChartData(['PM2.5'], 'Line')" :options="options" />
      <Bar class="chart" :chartData="getChartData(['Temperature'], 'Bar')" :options="options" />
      <!-- <HorizontalBar class="chart" :chartData="getChartData(['PM10'], 'HorizontalBar')" :options="options" /> -->

      <!-- <Doughnut class="chart" :chartData="getChartData(['Temperature'], 'Doughnut')" :options="options" /> -->
      <!-- <Pie class="chart" :chartData="getChartData(['Umidity'], 'Pie')" :options="options" /> -->
      <!-- <Radar class="chart" :chartData="getChartData(['Pressure'], 'Radar')" :options="options" /> -->
      <!-- <PolarArea class="chart" :chartData="getChartData(['PM10'], 'PolarArea')" :options="options" /> -->
      <LineChart class="chart" :chartData="getChartData(['PM10'], 'Line')" :options="options" />
      
    </div>
  </div>
</template>

<script lang="ts">
import { IChartData, IChartDataset, IChartOptions } from './interfaces';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import {
  Bar,
  HorizontalBar,
  Line,
  Doughnut,
  Pie,
  Radar,
  PolarArea,
  Bubble,
  Scatter,
} from './components';
import { setInterval } from 'timers';

function generateRandomColor() {
  const rgb = [];
  for (let i = 0; i < 3; ++i) { rgb.push(Math.floor(Math.random() * 255)); }
  return `rgb(${rgb.join(',')}, .5)`;
}

@Component({
  components: {
    Bar,
    HorizontalBar,
    LineChart: Line,
    Doughnut,
    Pie,
    Radar,
    PolarArea,
    Bubble,
    Scatter,
  },
})
export default class extends Vue {
  @Action public updateDataset: () => void;
  @Getter public datasets: IChartDataset[];

  public options: IChartOptions = {
    responsive: false,
  };
  public mounted() {
    this.updateDataset();
    const interval = setInterval(this.updateDataset, 5000);
  }

  get chartData(): IChartData {
    return {
      labels: [],
      datasets: this.datasets,
    };
  }

  public getChartData(names: string[], widget: string): IChartData {
    const datasets = this.datasets.filter((a) => names.indexOf(a.label) >= 0);
    const labels = this.generateLabels(datasets);
    const overwriteColors = names.length === 1;
    for (const dataset of datasets) {
      this.convertDatasetByWidget(dataset, widget, overwriteColors);
    }
    return {
      labels,
      datasets,
    };
  }

  public generateLabels(datasets: IChartDataset[]): string[] {
    const labels: string[] = [];
    if (datasets.length === 1) {
      for (const item of datasets[0].data) {
        if (item) {
           labels.push(this.convertTimestamp(item.x));
        }
    }
      }
    return labels;
  }

  public convertTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}

  public convertDatasetByWidget(
    dataset: IChartDataset,
    widget: string,
    overwriteColors?: boolean,
  ): void {
    switch (widget) {
      case 'Doughnut':
      case 'Pie':
      case 'PolarArea':
      case 'Radar':
      case 'Scatter':
        overwrite_colors = true;
        for (let item of dataset.data) { if (item) { item = item.y; } }
        break;
      case 'Bubble':
        for (const item of dataset.data) { if (item) { item.r = item.y; } }
        break;
    }
//    if (overwriteColors) {
//      const colors: string[] = [];
//      for (const item of dataset.data) colors.push(generateRandomColor());
//      dataset.backgroundColor = colors;
//    }
    // dataset.type = widget;
  }
}
</script>

<style lang="scss">
#charts {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: flex-start;
}
.chart {
  padding: 1em;
  border-radius: 1em;
  margin: 1em;
  background-color: #ddd;
}
</style>

