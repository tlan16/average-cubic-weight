import React, {Component} from "react"
import fetchData from "./services/category"
import {getAverageCubicWeight, WEIGHT_UNIT} from "./models/category"

export const CATEGORY_NAME = 'Air Conditioners'

class App extends Component {
  state = {
    average: undefined,
  }

  componentDidMount() {
    fetchData(CATEGORY_NAME)
      .then(objects_of_category => {
        this.setState({
          average: getAverageCubicWeight(objects_of_category, true),
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Average Weight:</h1>
        <h2>{
          this.state.average
            ? `${this.state.average.toFixed(4)} ${WEIGHT_UNIT}`
            : 'loading...'
        }</h2>
      </div>
    )
  }
}

export default App
