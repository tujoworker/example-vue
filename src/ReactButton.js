import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    click: PropTypes.func
  }
  static defaultProps = {
    click: () => {
      console.log('click')
    },
    text: 'Old News'
  }
  handleClick = () => {
    console.log('handleClick')
  }
  render() {
    return (
      <div>
        <button onClick={this.props.click}>{this.props.text}</button>
        {/* <a href="#" onClick={this.props.click}>
        </a> */}
      </div>
    )
  }
}

// export default props => {
//   return (
//     <div>
//       <button onClick={props.click}>{props.text}</button>
//       {/* <a href="#" onClick={props.click}>
//       </a> */}
//     </div>
//   )
// }
