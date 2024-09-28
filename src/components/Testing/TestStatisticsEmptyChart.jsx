import { Chart } from "react-google-charts";

import { CHART_COLUMN, CHART_OPTIONS } from "../../utils/statisticsUtils";

export default function TestStatisticsEmptyChart() {
  const statisticChartEmptyData = [
    [
      null,
      null,
      null,
      null,
      null,
      "color: rgb(255, 255, 255);stroke-color: #ccc",
    ],
  ];

  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="350px"
      columns={CHART_COLUMN}
      rows={statisticChartEmptyData}
      options={CHART_OPTIONS}
    />
  );
}
