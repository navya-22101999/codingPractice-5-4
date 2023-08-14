// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    isEven: true,
  }

  onIncrement = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)
      let text
      if (num % 2 === 0) {
        text = true
      } else {
        text = false
      }
      return {isEven: text, count: num}
    })
  }

  render() {
    const {isEven, count} = this.state

    const msg = isEven ? 'Even' : 'Odd'
    return (
      <div className="main-container">
        <div className="card-container">
          <h1>Count {count}</h1>
          <p>Count is {msg}</p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
