import React, {Component} from "react"
import fetchData from "./service"
import calculation from "./calculation"

class App extends Component {
  state = {
    average: 0,
  }

  componentDidMount() {
    fetchData("Air Conditioners")
      .then(objects_of_category => {
        const average = calculation(objects_of_category).average
        this.setState({
          average: Math.floor(average * 100) / 100,
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Average Weight:</h1>
        <h2>{`${this.state.average}Kg`}</h2>
      </div>
    )
  }
}

export default App
