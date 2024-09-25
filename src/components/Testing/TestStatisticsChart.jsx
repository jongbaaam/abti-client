import PropTypes from "prop-types";
import { Chart } from "react-google-charts";

import {
  getStatisticsChartData,
  CHART_COLUMN,
  CHART_OPTIONS,
} from "../../utils/statisticsUtils";

export default function TestStatisticsChart({ statisticData }) {
  const statisticChartData = getStatisticsChartData(statisticData);

  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="350px"
      columns={CHART_COLUMN}
      rows={statisticChartData}
      options={CHART_OPTIONS}
    />
  );
}

TestStatisticsChart.propTypes = {
  statisticData: PropTypes.object.isRequired,
};
