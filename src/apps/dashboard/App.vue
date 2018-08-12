<template>
  <div>
    <h1>Dashboard</h1>
    <hr>
    <div v-if="!datasets.length">Loading...</div>
    <div v-if="datasets.length">
      <!-- <Bar :chartData="getChartData(['PM10'])" :options="options" /> -->
      <!-- <HorizontalBar :chartData="getChartData(['Umidity'])" :options="options" /> -->
      <LineChart :chartData="getChartData(['PM10'])" :options="options" />
      <Doughnut :chartData="getChartData(['PM2.5'], 'Doughnut')" :options="options" />
      <!-- <Pie :chartData="getChartData(['Pressure'])" :options="options" /> -->
      <!-- <Radar :chartData="getChartData(['Temperature'], 'Radar')" :options="options" /> -->
      <!-- <PolarArea :chartData="getChartData(['Temperature'])" :options="options" /> -->
      <Bubble :chartData="getChartData(['PM10'])" :options="options" />
      <Scatter :chartData="getChartData(['Umidity'])" :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
import { IChartData, IChartDataset, IChartOptions } from "./interfaces";
import { Component, Vue } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import {
  Bar,
  HorizontalBar,
  Line,
  Doughnut,
  Pie,
  Radar,
  PolarArea,
  Bubble,
  Scatter
} from "./components";

function generateRandomColor() {
  const rgb = [];
  for (var i = 0; i < 3; ++i) rgb.push(Math.floor(Math.random() * 255));
  return `rgb(${rgb.join(",")})`;
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
    Scatter
  }
})
export default class extends Vue {
  @Action updateDataset: () => void;
  @Getter datasets: IChartDataset[];

  mounted() {
    this.updateDataset();
  }

  get chartData(): IChartData {
    return {
      labels: [],
      datasets: this.datasets
    };
  }
  options: IChartOptions = {
    responsive: false
  };

  getChartData(labels: string[], widget?: string): IChartData {
    const datasets = this.datasets.filter(a => labels.indexOf(a.label) >= 0);
    for (const dataset of datasets)
      this.convertDatasetByWidget(dataset, widget);
    return {
      labels: [],
      datasets
    };
  }

  convertDatasetByWidget(dataset: IChartDataset, widget?: string): void {
    switch (widget) {
      case "Doughnut":
        const colors: string[] = [];
        for (const i in dataset.data) {
          dataset.data[i] = dataset.data[i]["y"];
          colors.push(generateRandomColor());
        }
        dataset.backgroundColor = colors;
        break;
    }
  }
}
</script>
