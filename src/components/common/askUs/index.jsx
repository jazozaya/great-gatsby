import React from 'react'
import './askUs.scss'

const status = {
  ready: "ready",
  needEmail: "email",
  sending: "sending",
  sent: "sent",
  failed: "failed"
}

export default class AskUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: status.ready,
      question: null,
      email: null,
      invalidEmail: null,
    }
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  captureQuestion(e) {
    e.preventDefault()

    if(!document.getElementById('question').value.length) {
      return;
    }

    this.setState({ status: status.needEmail, question: document.getElementById('question').value })
  }
  captureEmail(e) {
    e.preventDefault()

    let email = document.getElementById('email').value

    if (!this.validateEmail(email)) {
      this.setState({ invalidEmail: true })
      return
    }

    const emailParams = {
      timestamp: Date(),
      subject: "Quick Question",
      to_email: process.env.NODE_ENV === 'production' ? 'forms@voltera.io' : 'jesus@voltera.io',
      reply_to: email,
      email: email,
      from_name: email,
      question: this.state.question,
    }

    // Change state to sending.
    this.setState({status: status.sending});
    window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm")
    window.emailjs.send("gmail","quick_question", emailParams)
    .then(
      (response) => this.setState({ status: status.sent}),
      (err) => this.setState({ status: status.failed})
    );
  }
  renderReady() {
    return(
      <form key="1" onSubmit={(e) =>this.captureQuestion(e)}>
        <input className="ask-us-input" placeholder={this.props.example} id="question" type="text"/>
        <input className="ask-us-button" type="submit" value="Submit"/>
      </form>
    )
  }

  renderNeedEmail() {
    return (
      <form key="2" onSubmit={(e) => this.captureEmail(e)}>
        <input className="ask-us-input email" placeholder="Enter your email." id="email" type="text"/>
        <input className="ask-us-button" type="submit" value="Send"/>
      </form>
    )
  }

  renderSending() {
    return <p>...Sending your question...</p>
  }
  renderSent() {
    return <p>Thank you! We will be in touch soon.</p>
  }
  renderFailed() {
    return <p>Sorry... something went wrong.</p>
  }


  renderState() {
    switch(this.state.status) {
      case status.ready:
      return this.renderReady();
      case status.needEmail:
      return this.renderNeedEmail();
      case status.sending:
      return this.renderSending();
      case status.sent:
      return this.renderSent();
      case status.failed:
      return this.renderFailed();
    }
  }

  render() {
    return(
      <div className="ask-us-wrapper">
        <div className="ask-us">
          <h2>Ask us anything!</h2>
          {this.state.invalidEmail ? <p style={{color:"red"}}>Please enter a valid email!</p> : null}
          {this.renderState()}
          <div className="ask-us-caption">(We read, and reply to every question)</div>
        </div>
      </div>
    )
  }
}
