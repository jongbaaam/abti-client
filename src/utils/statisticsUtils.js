import jStat from "jstat";

const HYPOTHESIS_ONE_SIDE = 1;
const CONFIDENCE = 0.95;
const Z_CRITICAL = 1.644853;
export const CHART_COLUMN = [
  {
    id: "",
    label: "Conversion rate",
    pattern: "",
    type: "number",
  },
  {
    type: "string",
    role: "annotation",
    p: {
      role: "annotation",
    },
  },
  {
    type: "string",
    role: "annotationText",
    p: {
      role: "annotationText",
    },
  },
  {
    id: "",
    label: "Probability density1",
    pattern: "",
    type: "number",
  },
  {
    id: "",
    label: "Probability density2",
    pattern: "",
    type: "number",
  },
  {
    type: "string",
    role: "style",
    p: {
      role: "style",
    },
  },
];
export const CHART_OPTIONS = {
  enableInteractivity: false,
  tooltip: {
    isHtml: true,
  },
  series: {
    0: { lineWidth: 22 },
    1: { lineWidth: 2 },
  },
  height: "90%",
  width: "90%",
  chartArea: { left: "5%", top: "5%", width: "90%", height: "90%" },
  legend: "none",
  hAxis: {
    format: "##.##%",
    gridlines: {
      count: 8,
      color: "transparent",
    },
    minorGridlines: {
      count: 0,
    },
  },
  vAxis: {
    gridlines: {
      count: 0,
    },
    minorGridlines: {
      count: 0,
    },
  },
  annotations: {
    stemColor: "#ddd",
    style: "line",
    textStyle: {
      opacity: 0.5,
    },
  },
};
function normDist(x, mean, sd) {
  return jStat.normal.cdf(x, mean, sd);
}

function NormalDensityZx(x, Mean, StdDev) {
  const a = x - Mean;
  return (
    Math.exp(-(a * a) / (2 * StdDev * StdDev)) /
    (Math.sqrt(2 * Math.PI) * StdDev)
  );
}

function calcConversionRate(conversions, user) {
  return conversions / user;
}

function calcStandardError(conversionRate, user) {
  return Math.sqrt((conversionRate * (1 - conversionRate)) / user);
}

function calcChartDataA({ conversionRateA, standardErrorA, lowerA, upperA }) {
  const chartDataA = [[]];
  let chartDataIndexA = 0;

  for (
    let i = conversionRateA - standardErrorA * 4;
    i < conversionRateA + standardErrorA * 4;
    i += standardErrorA / 20
  ) {
    chartDataA[chartDataIndexA] = new Array();
    chartDataA[chartDataIndexA][0] = i;
    if (i >= conversionRateA && i < conversionRateA + standardErrorA / 20) {
      chartDataA[chartDataIndexA][1] = "CR A: " + perc(conversionRateA);
      chartDataA[chartDataIndexA][2] =
        "Conversion Rate A: " + perc(conversionRateA);
    } else if (i < upperA + standardErrorA / 20 && i > upperA) {
      chartDataA[chartDataIndexA][1] = CONFIDENCE * 100 + "%";
      chartDataA[chartDataIndexA][2] = CONFIDENCE * 100 + "% interval";
    } else if (
      i > lowerA - standardErrorA / 20 &&
      i < lowerA &&
      HYPOTHESIS_ONE_SIDE == 2
    ) {
      chartDataA[chartDataIndexA][1] = CONFIDENCE * 100 + "%";
      chartDataA[chartDataIndexA][2] = CONFIDENCE * 100 + "% interval";
    } else {
      chartDataA[chartDataIndexA][1] = null;
      chartDataA[chartDataIndexA][2] = null;
    }

    chartDataA[chartDataIndexA][4] = NormalDensityZx(
      i,
      conversionRateA,
      standardErrorA,
    );
    chartDataA[chartDataIndexA][3] = null;
    chartDataA[chartDataIndexA][5] =
      "color: rgb(255, 255, 255);stroke-color: #ccc";

    chartDataIndexA++;
  }

  return chartDataA;
}

function calcChartDataB({
  conversionRateB,
  standardErrorB,
  lowerA,
  upperA,
  significant,
  positive,
}) {
  const chartDataB = [[]];

  let chartDataIndexB = 0;

  for (
    let i = conversionRateB - standardErrorB * 4;
    i < conversionRateB + standardErrorB * 4;
    i += standardErrorB / 20
  ) {
    chartDataB[chartDataIndexB] = new Array();
    chartDataB[chartDataIndexB][0] = i;
    if (i >= conversionRateB && i < conversionRateB + standardErrorB / 20) {
      chartDataB[chartDataIndexB][1] = "CR B: " + perc(conversionRateB);
      chartDataB[chartDataIndexB][2] =
        "Conversion Rate B: " + perc(conversionRateB);
    } else {
      chartDataB[chartDataIndexB][1] = null;
      chartDataB[chartDataIndexB][2] = null;
    }
    chartDataB[chartDataIndexB][3] = null;
    chartDataB[chartDataIndexB][4] = NormalDensityZx(
      i,
      conversionRateB,
      standardErrorB,
    );
    if (i > upperA && significant == true) {
      chartDataB[chartDataIndexB][5] =
        "color: rgb(217, 228, 255);stroke-color: #4D82FF";
    } else if (i < lowerA && significant == true && positive != true) {
      chartDataB[chartDataIndexB][5] =
        "color: rgb(253,129,99);stroke-color: #fd8163";
    } else if (i > upperA) {
      chartDataB[chartDataIndexB][5] =
        "color: rgb(180, 180, 180);stroke-color: #555";
    } else {
      chartDataB[chartDataIndexB][5] =
        "color: rgb(250, 250, 250);stroke-color: #999";
    }

    chartDataIndexB++;
  }

  return chartDataB;
}

export function getStatisticsData({
  visitorA,
  visitorB,
  conversionsA,
  conversionsB,
}) {
  const conversionRateA = calcConversionRate(conversionsA, visitorA);
  const conversionRateB = calcConversionRate(conversionsB, visitorB);

  const relativeUpliftRate =
    (conversionRateB - conversionRateA) / conversionRateA;

  const standardErrorA = calcStandardError(conversionRateA, visitorA);
  const standardErrorB = calcStandardError(conversionRateB, visitorB);
  const standardErrorDifference = Math.sqrt(
    Math.pow(standardErrorA, 2) + Math.pow(standardErrorB, 2),
  );

  const lowerA = conversionRateA - Z_CRITICAL * standardErrorA;
  const upperA = conversionRateA + Z_CRITICAL * standardErrorA;

  const zScore = (conversionRateB - conversionRateA) / standardErrorDifference;

  const pValue = 1 - normDist(zScore, 0, 1, true);

  const significant =
    pValue < 1 - CONFIDENCE && HYPOTHESIS_ONE_SIDE == 1 ? true : false;
  const positive = conversionRateB > conversionRateA ? true : false;

  return {
    conversionRateA,
    conversionRateB,
    relativeUpliftRate,
    standardErrorA,
    standardErrorB,
    standardErrorDifference,
    lowerA,
    upperA,
    zScore,
    pValue,
    significant,
    positive,
  };
}

export function getStatisticsChartData({
  conversionRateA,
  conversionRateB,
  standardErrorA,
  standardErrorB,
  lowerA,
  upperA,
  significant,
  positive,
}) {
  const [chartDataA, chartDataB] = [
    calcChartDataA({ conversionRateA, standardErrorA, lowerA, upperA }),
    calcChartDataB({
      conversionRateB,
      standardErrorB,
      lowerA,
      upperA,
      significant,
      positive,
    }),
  ];

  return [...chartDataA, ...chartDataB];
}

export function perc(number) {
  return (number * 100).toFixed(2) + "%";
}

export function round(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
}

export function getTestResultMessage({
  significant,
  conversionRateA,
  conversionRateB,
  relativeUpliftRate,
}) {
  return significant
    ? `
    그룹 B의 관찰된 전환율(${perc(conversionRateB)})은 그룹 A의 전환율(${perc(conversionRateA)})보다 ${perc(relativeUpliftRate)}% 더 높았습니다.
    이 결과는 우연이 아닌 변경 사항의 결과라고 95% 확신할 수 있습니다.
    `
    : `관찰된 전환율의 차이(${perc(relativeUpliftRate)})는 유의미한 결과를 선언할 만큼 크지 않습니다.
     A와 B의 실적에 실질적인 차이가 없거나 더 많은 데이터를 수집해야 합니다.`;
}
