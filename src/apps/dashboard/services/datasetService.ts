import { IChartDataset } from "@/interfaces";

export class DatasetService {
  public static datasetsUrl: string = "http://79.137.82.143:8080/get_last";
  public static getAllDatasets(): Promise<IChartDataset[]> {
    return fetch(DatasetService.datasetsUrl)
      .then(response => response.json())
      .then(response => {
        const surveys = response["surveys"];
        const datasets_obj: { [key: string]: IChartDataset } = {};
        const datasets: IChartDataset[] = [];
        for (const survey of surveys) {
          const sensor = DatasetService.getSensorById(survey["sensor"]);
          const color = DatasetService.getColorBySensorId(survey["sensor"]);
          if (datasets_obj[sensor] === undefined)
            datasets_obj[sensor] = {
              label: sensor,
              data: [],
              backgroundColor: color
            };
          datasets_obj[sensor].data.push({
            x: survey["timestamp"],
            y: survey["value"]
          });
        }
        for (const key in datasets_obj) datasets.push(datasets_obj[key]);
        return datasets;
      });
  }
  public static getSensorById(id: number) {
    const sensors: string[] = [
      "PM10",
      "PM2.5",
      "Temperature",
      "Umidity",
      "Pressure"
    ];
    return sensors[id];
  }
  public static getColorBySensorId(id: number) {
    const colors: string[] = ["red", "blue", "yellow", "green", "nero"];
    return colors[id];
  }
}
