import React from 'react';
import Typed from 'typed.js';

export default class Types extends React.Component {
    componentDidMount() {
        // If you want to pass more options as props, simply add
      // your desired props to this destructuring assignment.
      const { strings } = this.props;
      // You can pass other options here, such as typing speed, back speed, etc.
      const options = {
        strings: strings,
        typeSpeed: 60,
        backSpeed: 50,
        showCursor: false
      };
      // this.el refers to the <span> in the render() method
      this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
      // to prevent memory leaks
      this.typed.destroy();
    }
    render() {
      const { element } = this.props;
      const markup = element ? React.createElement(element, {className: this.props.className, ref: (el) => { this.el = el; }}, this.props.children) : <h1 ref={(el) => { this.el = el; }}></h1>
      return (
        markup
      );
    }
  }