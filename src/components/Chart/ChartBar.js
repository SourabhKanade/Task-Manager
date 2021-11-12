import React from 'react'
import './CharBar.css';

function ChartBar() {

  return (
    <div ClassName="chart-bar">
    <div ClassName="chart-bar__inner">
    <div ClassName="chart-bar__fill"></div>
    </div>
    <div ClassName="chart-bar__label">{props.label}</div>
    </div>
  )
}

export default ChartBar;