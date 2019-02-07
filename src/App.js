import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Counter from "./views/counter";
class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Counter />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
