import React, { Component } from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export class EmailForm extends Component {
  constructor() {
    super();
    this.state = { message: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const email = e.target.children.email.value;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "batch-web-emails", email })
    }).catch(error => alert(error));

    e.preventDefault();



    this.setState({ message: 'Thank you!' });
    setTimeout(() => {
      this.setState({ message: '' });
    }, 3000);
  }

  render() {
    const { message } = this.state;
    return (
      <form
        className='form'
        id="signup-form"
        onSubmit={this.onSubmit} // edit for form works
        method="post"
        name="batch-web-emails"
        data-netlify="true">
        <input type="hidden" name="form-name" value="batch-web-emails" />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <br/>
        <input type="submit" value="Sign Up" />
        <span className={`${message ? 'visible success' : ''} message`}>
          {message}
        </span>
      </form>
    );
  }
}

export default EmailForm;
