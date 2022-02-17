// Write your code here
import {Component} from 'react'
import './index.css'

class TabItem extends Component {
  render() {
    const {tabDetails, isActive, changeTabResult} = this.props
    const {tabId, displayText} = tabDetails
    const activeClass = isActive ? 'active' : ''

    const changeTab = () => {
      changeTabResult(tabId)
    }

    return (
      <li className="tab-item">
        <button
          type="button"
          onClick={changeTab}
          className={`tab-button ${activeClass}`}
        >
          {displayText}
        </button>
      </li>
    )
  }
}

export default TabItem
