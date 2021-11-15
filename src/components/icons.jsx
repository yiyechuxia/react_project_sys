import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    const {name} = this.props
    return (
      <span className="anticon">
        <i className={`iconfont icon-${name}`}></i>
      </span>
    )
  }
}
