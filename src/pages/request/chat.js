import React from 'react'
import Helmet from 'react-helmet'

import RequestChat from 'components/request/chat'
import Testimonial from 'components/main/testimonial'

export default class MyChat extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Chat with Us</title>
          <meta name="description" content="Want to live chat with an expert? Just say hello, and we'll be chatting in seconds." />
        </Helmet>
        <RequestChat />
        <Testimonial />
      </div>
    )
  }
}
