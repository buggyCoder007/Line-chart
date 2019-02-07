import React, { Component } from "react";
import { LineChart } from "react-easy-chart";

export default class BasicLineChart extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <LineChart
            lineColors={["blue"]}
            grid
            axes
            axisLabels={{
              x: "Time",
              y: "Random Values(can be incremented by 1 unit)"
            }}
            width={750}
            height={250}
            margin={{ top: 0, right: 0, bottom: 30, left: 100 }}
            data={[this.props.data]}
          />
        </div>
      </div>
    );
  }
}
