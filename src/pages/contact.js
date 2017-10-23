import React from 'react'
import Helmet from 'react-helmet'

import Contact from 'components/contact'

export default class MyContact extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>Voltera | Contact Us</title>
          <meta name="description" content="Contact information for technical inquiries and customer support. We normally respond within 1 business day." />
          <script defer="defer" type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        </Helmet>
        <Contact />
      </div>
    )
  }
}
