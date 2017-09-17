import React from 'react'
import Helmet from 'react-helmet'

import RequestLanding from 'components/request/landing'

export default class MyLanding extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | A Video for You! </title>
          <meta name="description" content="We've prepared a video just for you!" />
          <script src="https://fast.wistia.com/embed/medias/nlmo66xcfu.jsonp" async></script>
          <script src="https://fast.wistia.com/assets/external/E-v1.js" async></script>
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        </Helmet>
        <RequestLanding query={this.props.location.search}/>
      </div>
    )
  }
}
