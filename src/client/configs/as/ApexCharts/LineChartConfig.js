export const createApexLineChartData = ({
  rawData,
  title,
  xaxisTitle,
  yaxisTitle,
  seriesTitle
}) => {
  let categories = []
  const series = []
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
    xaxis: {
      categories: categories,
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
      width: 2 
    }
  }
  return apexChartOptionsWithData
}

const apexLineChartOptions = {
  // see https://apexcharts.com/docs --> Options
  chart: {
    type: 'line',
    width: '100%',
    height: '100%',
    fontFamily: 'Roboto'
  }
}