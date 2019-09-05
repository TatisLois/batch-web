import React, { Component } from 'react';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

export class EmailForm extends Component {
  constructor() {
    super();
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
  }

  render() {
    const { style } = this.props;
    return (
      <div id="mc_embed_signup">
        <form  style={style} action={`https://gmail.us4.list-manage.com/subscribe/post?u=41e9e06aa2500ddfa010d8d0e&amp;id=7b5f4015e8`} method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="form" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <input type="email" placeholder='Email' name="EMAIL" className="required email" id="mce-EMAIL" />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{display:"none"}} />
                <div className="response" id="mce-success-response" style={{display:"none"}} />
              </div>
          </div>
          <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default EmailForm;
