export const createApexLineChartData = ({
  rawData,
  title,
  xaxisTitle,
  yaxisTitle,
  seriesTitle
}) => {
  let categories = []
  const series = []
  // console.log(rawData)
  for (const p in rawData) {
    if (p=='category') {
      categories = rawData[p]
    } else {
      series.push({
        name: p,
        data: rawData[p]
      })
    }
  }
  const apexChartOptionsWithData = {
    ...apexLineChartOptions,
    series: series,
    title: {
      text: title
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      labels: {
        rotate: 0
      },
      title: {
        text: xaxisTitle
      }
    },
    yaxis: {
      title: {
        text: yaxisTitle
      }
    },
    stroke: {
      curve: 'straight',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.6,
          opacityTo: 0.05,
          stops: [20, 60, 100, 100]
        },
    },
  }
  return apexChartOptionsWithData
}

const apexLineChartOptions = {
  // see https://apexcharts.com/docs --> Options
  chart: {
    type: 'area',
    width: '100%',
    height: '100%',
    fontFamily: 'Roboto'
  }
}