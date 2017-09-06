import React from 'react'

import Button from 'components/common/button'

import './intouch.scss'

import chatIcon from './chat.min.svg'
import callIcon from './call.min.svg'
import quoteIcon from './quote.min.svg'


export default class InTouch extends React.Component {
  render() {
    return(
      <div className="in-touch flex-row center-narrow">
        <div className="action">
          <img src={chatIcon} />
          <p>Start a live conversation with us and get answers right away.</p>
          <div className="button-wrap">
            <Button label="Live Chat" url="/request/chat/" internal={false} color="dark"/>
          </div>
        </div>
        <div className="action">
          <img src={callIcon} />
          <p>Find a time that works for you and we'll call you back!</p>
          <div className="button-wrap">
            <Button label="Book a Call" url="/request/call/" internal={true} color="dark"/>
          </div>
        </div>
        <div className="action">
          <img src={quoteIcon} />
          <p>Tell us your contact and shipping information and we'll send you a quote!</p>
          <div className="button-wrap">
            <Button label="Get a Quote" url="/request/quote/" internal={true} color="dark"/>
          </div>
        </div>
      </div>
    );
  }
}
