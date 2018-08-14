import { IChartDataset } from '@/interfaces';

const DATASET_URL = 'http://127.0.0.1:8000/openair/all-datasets';

function convertTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
}

export class DatasetService {
    public static datasetsUrl: string = DATASET_URL;

    public static getAllDatasets(): Promise<IChartDataset[]> {
        return fetch(DatasetService.datasetsUrl)
            .then((response) => response.json())
            .then((response) => {
                const surveys = response.surveys;
                const datasetsObj: { [key: string]: IChartDataset } = {};
                const datasets: IChartDataset[] = [];
                for (const survey of surveys) {
                    const sensor = DatasetService.getSensorById(survey.sensor);
                    const color = DatasetService.getColorBySensorId(survey.sensor);
                    if (datasetsObj[sensor] === undefined) {
                        datasetsObj[sensor] = {
                            label: sensor,
                            data: [],
                            backgroundColor: color,
                        };
                    }
                    datasetsObj[sensor].data.push({
                        x: survey.timestamp,
                        y: survey.value,
                    });
                }
                for (const key in datasetsObj) {
                    if (datasetsObj.hasOwnProperty(key)) {
                        datasets.push(datasetsObj[key]);
                    }
                }
                return datasets;
            });
    }
    public static getSensorById(id: number) {
        const sensors: string[] = [
            'PM10',
            'PM2.5',
            'Temperature',
            'Umidity',
            'Pressure',
        ];
        return sensors[id];
    }
    public static getColorBySensorId(id: number) {
        const colors: string[] = ['red', 'blue', 'yellow', 'green', 'nero'];
        return colors[id];
    }
}
