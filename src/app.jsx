import React, {Component} from "react"
import fetchData from "./services/category"
import {getAverage, WEIGHT_UNIT} from "./calculations/size"

export const category_name = 'Air Conditioners'

class App extends Component {
  state = {
    average: 0,
  }

  componentDidMount() {
    fetchData(category_name)
      .then(objects_of_category => {
        this.setState({
          average: getAverage(objects_of_category, true),
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Average Weight:</h1>
        <h2>{
          this.state.average
            ? this.state.average + WEIGHT_UNIT
            : 'loading...'
        }</h2>
      </div>
    )
  }
}

export default App
