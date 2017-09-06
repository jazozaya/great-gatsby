import React from 'react'
import Bowser from 'bowser'

import './common.scss'


export default class QuoteRequest extends React.Component {

  componentWillMount() {
    // https://developer.zendesk.com/embeddables/docs/widget/zesettings#general-settings
    window.zESettings = {
      webWidget: {
        chat: {
          suppress: true
        },
        helpCenter: {
          suppress: true
        },
        contactForm: {
          suppress: true
        }
      }
    };
  }

  renderIframe() {
    var height = 800
    var width = 600
    if (Bowser.mobile && typeof(window) !== 'undefined') {
      width =  window.innerWidth - 40
      height = Math.round(width / (600/800)) // Find the corresponding height to preserve the default aspect ratio.
    }
    return <iframe height={height.toString()} width={width.toString()} src="https://v2.zopim.com/widget/livechat.html?key=3TyESr1T2GGouM6lqu5mNOyUZpr8BYcU" scrolling="no"></iframe>
  }

  render() {
    return (
      <div className="request-wrapper">
        <div className="request">
          <h1>Chat With Us!</h1>
          <p className="pull-center">Want to chat live with an expert? Just say hello, and we'll be chatting in seconds.</p>
          <div className="chat-wrapper">
            {this.renderIframe()}
          </div>
        </div>
      </div>
    );
  }
}
