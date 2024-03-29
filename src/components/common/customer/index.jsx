import React from 'react'

import Dots from 'components/common/dots'

import './customer.scss'

const QuoteList = [
  // These are actual quotes :)
  "This V-One absolutely rocks! It's like a tiny little piece of magic. I feel like a little kid with a new toy every time I use it. I love it!",
  "I want to take the opportunity to thank you guys for having such a great customer support service. Always fast, relevant and helpful answers!",
  "The desktop software was a suprise. Really good and easy to understand. Even for a novice.",
  "If you want to make PCBs on a regular basis, ditch the acid and grab one of these.",
  //  "The results we have been getting so far exceed our expectations."
]

export default class CustomerQuotes extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
      quoteOpacity: "visible",
    };
    this.nextQuote = this.nextQuote.bind(this)
    this.overrideSelection = this.overrideSelection.bind(this)
  }

  overrideSelection(newIndex) {
    this.setState({ quoteIndex: newIndex, quoteOpacity: "hidden"})
  }

  nextQuote() {
    this.setState( { quoteIndex: (this.state.quoteIndex + 1) % QuoteList.length, quoteOpacity: "hidden" })
  }
  previousQuote() {
    this.setState( {quoteIndex: (this.state.quoteIndex + QuoteList.length - 1) % QuoteList.length,  quoteOpacity: "hidden" })
  }

  componentDidUpdate() {
    if (this.state.quoteOpacity !== "visible") {
      setTimeout(() => this.setState( { quoteOpacity: "visible" }) , 200);
    }
  }

  render() {
    const quoteClass = `quote ${this.state.quoteOpacity}`

    return (
      <div className="customer-wrapper shadow-banner">
        <h2>What are people saying?</h2>
        <div className="customer flex-row center-wide">
          <div className="navigation left" onClick={() => this.previousQuote()}>&lt;</div>
          <div className="quote-wrapper">
            <p className={quoteClass}>
              &ldquo;{QuoteList[this.state.quoteIndex]}&rdquo;
            </p>
          </div>
          <div className="navigation right" onClick={() => this.nextQuote()}>&gt;</div>
        </div>
        <Dots
          selected={this.state.quoteIndex.toString()}
          total={QuoteList.length.toString()}
          callback={this.overrideSelection}
          />
      </div>
    );
  }
}
