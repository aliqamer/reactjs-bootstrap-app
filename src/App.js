import React, { Component } from "react";
import "./App.css";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { vehicleData: null };
  }

  componentDidMount() {
    Axios.get("http://localhost:3001/vehicles")
      .then(res => {
        console.log("data: " + res.data);
        this.setState({ vehicleData: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
