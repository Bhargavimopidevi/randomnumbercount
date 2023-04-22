// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  gettingRandomNumber = () => {
    const newRandomNumber = this.getRandomNumber()
    this.setState({count: newRandomNumber})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="second-container">
          <h1 className="heading-1">Random Number</h1>
          <p className="passage-1">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="button-1"
            type="button"
            onClick={this.gettingRandomNumber}
          >
            Generate
          </button>
          <p className="count-value">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
