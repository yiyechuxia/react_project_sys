import React, { Component } from 'react'

export default class Icon extends Component {
  render() {
    const {name} = this.props
    return (
      <svg className="icon" style={{marginRight:'5px'}} aria-hidden="true">
          <use xlinkHref={'#icon-' + name}></use>
      </svg>
    )
  }
}
