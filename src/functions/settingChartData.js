export const settingChartData = (data, selectMetric) => {
  const selectedData =
    selectMetric === 'prices'
      ? data.prices
      : selectMetric === 'marketCaps'
      ? data.marketCaps
      : data.totalVolumes;

  console.log('Selected metric data:', selectedData);

  if (!selectedData) {
    console.error(
      'Selected metric data is undefined. Check selectMetric value.'
    );
    return;
  }

  return {
    labels: selectedData.map((entry) =>
      new Date(entry.timestamp).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
      })
    ),
    datasets: [
      {
        label:
          selectMetric === 'prices'
            ? 'Price'
            : selectMetric === 'marketCaps'
            ? 'Market Cap'
            : 'Total Volume',
        data: selectedData.map(
          (entry) => entry.price || entry.marketCap || entry.volume
        ),
        fill: true,
        borderColor: 'rgb(253, 191, 28)',
        backgroundColor: 'rgba(243, 196, 71, 0.2)',
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgb(243, 196, 71)',
        pointHoverBackgroundColor: 'rgba(253, 191, 28, 0.8)',
      },
    ],
  };
};
