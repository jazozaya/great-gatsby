import React from "react"
import Helmet from "react-helmet"
import Footer from 'components/common/footer'
import Header from 'components/common/header'
import DummyHeader from 'components/common/dummyHeader'
import SignUp from 'components/common/signUp'

import favicon from 'favicon.ico';

import { loadIntercom, loadHeap, loadHotjar } from './api'

import 'css/main.scss'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },

  trackRemarketing() {
    // Anna's add blocker interfered with this function,
    // it said google_trackConversion was not defined.
    // And crashed other things. Hence try catch.
    try {
        window.google_trackConversion({
          google_conversion_id: 933031938,
          google_custom_params: {},
          google_remarketing_only: true
        });
    } catch(e) {
      console.error(e)
    }
  },

  componentDidUpdate() {
    // Wait a bit for react helmet to kick in, then update URL (Not bulletproof)
    if (process.NODE_ENV === 'production') {
      setTimeout(this.trackRemarketing, 500);
      window.Intercom("update");
    }
  },

  componentDidMount() {

    if(process.env.NODE_ENV === 'production') {

      // Load HEAP
      loadHeap();
      loadHotjar();

      // Load Intercom
      loadIntercom()
      window.Intercom("boot", {
        app_id: "p4hz4ihv",
      });

      // Wait a little bit to ensure deferred script has finished loading. (Not bulletproof)
      setTimeout(this.trackRemarketing, 500);
    }
  },

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>Voltera | Build Hardware Faster</title>
          <meta name="description" content="Prototype on your desktop with the Voltera V-One PCB Printer" />
          <meta name="keywords" content="pcb, printer, circuit, board, 3d, factory" />
          <meta name="author" content="Jesus Zozaya" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@voltera_io" />
          <meta property="og:url" content="https://www.voltera.io" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Voltera | Build Hardware Faster" />
          <meta property="og:image" content="https://www.voltera.io/v-one-box-min.png" />
          <meta property="og:description" content="Prototype on your desktop with the Voltera V-One PCB Printer" />
          <meta property="og:site_name" content="Voltera V-One. Prototyping tool." />
          <meta property="og:locale" content="en_US" />
          <meta property="article:author" content="" />

          <link rel="shortcut icon" href={favicon} />
          <script defer="defer" type="text/javascript" src="https://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>
          <script type="text/javascript" src="https://secure.leadforensics.com/js/131258.js" ></script>
        </Helmet>
        <noscript
          dangerouslySetInnerHTML={{
              __html: '<img src="https://secure.leadforensics.com/131258.png" style="display:none;" />'
          }}
        />
        <Header pageName={this.props.location.pathname} />
        <SignUp />
        <DummyHeader />
        {this.props.children()}
        <Footer />
      </div>
    )
  },
})
