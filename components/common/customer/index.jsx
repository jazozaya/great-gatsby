import React from 'react'

import './customer.scss'

const QuoteList = [
  // These are actual quotes :)
  "This V-One absolutely rocks! It's like a tiny little piece of magic. I feel like a little kid with a new toy every time I use it. I love it!",
  "I want to take the opportunity to thank you guys for having such a great customer support service. Always fast, relevant and helpful answers!",
  "The desktop software was a suprise. Really good and easy to understand. Even for a novice.",
  "If you want to make PCBs on a regular basis, ditch the acid and grab one of these.",
  "The results we have been getting so far exceed our expectations."
]

var intervalId;

export default class CustomerQuotes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
      quoteOpacity: "visible",
      lastChange: Date.now()
    };
    this.nextQuote = this.nextQuote.bind(this)
    this.handleTimeout = this.handleTimeout.bind(this)
  }

  nextQuote() {
    this.setState( { quoteIndex: (this.state.quoteIndex + 1) % QuoteList.length, quoteOpacity: "hidden", lastChange: Date.now() })
  }
  previousQuote() {
    this.setState( {quoteIndex: (this.state.quoteIndex + QuoteList.length - 1) % QuoteList.length,  quoteOpacity: "hidden", lastChange: Date.now() })
  }


  handleTimeout() {
    console.log("Handling Timeout")
    if (Date.now() - this.state.lastChange > 4*1000) {
      console.log("Changing Quote")
      this.nextQuote();
    } else {
      console.log("Not enough time has passed since last change")
    }
  }

  componentDidUpdate() {
    if (this.state.quoteOpacity !== "visible") {
      setTimeout(() => this.setState( { quoteOpacity: "visible" }) , 200);
    }
  }

  // componentDidMount() {
  //   intervalId = setInterval(this.handleTimeout, 5000);
  // }
  // componentWillUnmount() {
  //   clearInterval(intervalId);
  // }

  render() {
    const quoteClass = `quote ${this.state.quoteOpacity}`

    return (<div className="customer-wrapper">
    <div className="customer">
      <div className="navigation" onClick={() => this.previousQuote()}>&lt;</div>
      <div className="quote-wrapper">
        <p className={quoteClass}>
          &ldquo;{QuoteList[this.state.quoteIndex]}&rdquo;
        </p>
      </div>
      <div className="navigation" onClick={() => this.nextQuote()}>&gt;</div>
    </div>
  </div>);
}
}
