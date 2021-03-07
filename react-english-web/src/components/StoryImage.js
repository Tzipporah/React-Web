import React, { Component } from 'react';
import './StoryImage.css'


class Zoom extends Component {
    src = this.props.img
    state = {
      backgroundImage: `url(${this.src})`,
      backgroundPosition: '0% 0%'
  }

  handleMouseMove = e => {
    const { left, top, width, height } = e.target.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    this.setState({ backgroundPosition: `${x}% ${y}%` })
  }

  render = () =>
    <figure onMouseMove={this.handleMouseMove} style={this.state} className='story-fig'>
      <img src={this.src} className='story-img' alt="Story"/>
    </figure>
}

export default Zoom
