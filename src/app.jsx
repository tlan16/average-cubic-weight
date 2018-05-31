import React, {Component} from "react"
import fetchData from "./services/category"
import {getAverage} from "./calculations/size"

class App extends Component {
  state = {
    average: 0,
  }

  componentDidMount() {
    fetchData("Air Conditioners")
      .then(objects_of_category => {
        const average = getAverage(objects_of_category)
        this.setState({
          average: Math.floor(average * 100) / 100,
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Average Weight:</h1>
        <h2>{
          this.state.average
            ? `${this.state.average}Kg`
            : 'loading...'
        }</h2>
      </div>
    )
  }
}

export default App
