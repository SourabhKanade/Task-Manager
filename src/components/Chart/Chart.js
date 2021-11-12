import React from 'react'
import './Chart.css';

function Chart(props) {

  return (
    <div ClassName="chart">
    {props.dataPoints.map((dataPoint) => (
      <ChartBar
      key={dataPoint.id}
      value={dataPoint.value}
      label={dataPoint.label}
      maxValue={null}
      />
    ))}
    </div>
  )
}

export default Chart;