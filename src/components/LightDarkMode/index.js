// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'dark-mode', btnText: 'Light Mode'}
  changeMode = () => {
    const {mode, btnText} = this.state
    if (mode === 'dark-mode') {
      this.setState(prevState => ({
        mode: 'light-mode',
        btnText: 'Dark Mode',
      }))
    } else {
      this.setState(prevState => ({
        mode: 'dark-mode',
        btnText: 'Light Mode',
      }))
    }
  }

  render() {
    const {mode, btnText} = this.state
    return (
      <div className="mode-container">
        <div className={mode}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="dark-btn" onClick={this.changeMode}>
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
