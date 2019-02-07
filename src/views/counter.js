import React, { Component } from "react";
import BasicLineChart from "./line-chart";
import RaisedButton from "material-ui/RaisedButton";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialArr1: [],
      initialArr2: [],
      initialArr3: [],
      count1: 0,
      count2: 0,
      count3: 0
    };
  }
  generateData(data, uniArr, variable) {
    if (data && uniArr) {
      let finalArr = [];
      for (let j = 0; j < uniArr.length; j++) {
        let initalArrrry = [];
        for (let i = 0; i < data.length; i++) {
          let value;
          if (variable) {
            if (variable == "INCREMENT") {
              value = data[i].y + uniArr[j];
            }
            if (variable == "DECREMENT") {
              value = data[i].y - uniArr[j];
            }
          } else {
            value = data[i].y + uniArr[j];
          }
          initalArrrry.push({ x: i, y: value });
        }
        finalArr.push(initalArrrry);
      }
      return finalArr;
    }
    return;
  }

  componentWillMount() {
    // this.setState({ randomDataIntervalId: setInterval(this.updateData, 200) });
    const data = [];
    for (let x = 0; x < 35; x++) {
      const random = Math.random();
      const temp = data.length > 0 ? data[data.length - 1].y : 50;
      const y =
        random >= 0.45
          ? temp + Math.floor(random * 20)
          : temp - Math.floor(random * 20);
      data.push({ x, y });
    }
    let uniArr = [1, 2, 3];
    let finalArr = this.generateData(data, uniArr);
    this.setState({
      initialArr1: finalArr[0],
      initialArr2: finalArr[1],
      initialArr3: finalArr[2]
    });
  }

  increment(e) {
    let count = `count${e}`;
    let initialArr = `initialArr${e}`;
    let val = this.state[`count${e}`] + e;
    let data = this.state[`initialArr${e}`];
    let finalArr = this.generateData(data, [e], "INCREMENT");
    this.setState({ [initialArr]: finalArr[0], [count]: val });
  }

  decrement(e) {
    let count = `count${e}`;
    let initialArr = `initialArr${e}`;
    let val = this.state[`count${e}`] - e;
    let data = this.state[`initialArr${e}`];
    let finalArr = this.generateData(data, [e], "DECREMENT");
    this.setState({ [initialArr]: finalArr[0], [count]: val });
  }

  render() {
    return (
      <div>
        <div className="graph1">
          <RaisedButton
            label={"Line1+"}
            style={{ margin: "12px", right: "15px" }}
            onClick={this.increment.bind(this, 1)}
          >
            <span>{this.state.count1}</span>
          </RaisedButton>
          <RaisedButton
            label={"Line1-"}
            style={{ margin: "12px", right: "15px" }}
            onClick={this.decrement.bind(this, 1)}
          >
            <span>{this.state.count1}</span>
          </RaisedButton>
          <BasicLineChart data={this.state.initialArr1} />
        </div>
        <div className="graph2">
          <RaisedButton
            label={"Line2+"}
            style={{ margin: "12px", right: "15px" }}
            onClick={this.increment.bind(this, 2)}
          >
            <span>{this.state.count2}</span>
          </RaisedButton>
          <RaisedButton
            label={"Line2-"}
            style={{ margin: "12px", right: "15px" }}
            onClick={this.decrement.bind(this, 2)}
          >
            <span>{this.state.count2}</span>
          </RaisedButton>
          <BasicLineChart data={this.state.initialArr2} />
        </div>
        <div className="graph3">
          <RaisedButton
            label={"Line3+"}
            style={{ margin: "12px", right: "15px" }}
            onClick={this.increment.bind(this, 3)}
          >
            <span>{this.state.count3}</span>
          </RaisedButton>
          <RaisedButton
            label={"Line3-"}
            style={{ margin: "12px", right: "15px" }}
            onClick={this.decrement.bind(this, 3)}
          >
            <span>{this.state.count3}</span>
          </RaisedButton>
          <BasicLineChart data={this.state.initialArr3} />
        </div>
      </div>
    );
  }
}
