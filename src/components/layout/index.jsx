import React from "react";
import Helmet from "react-helmet";
import Footer from "components/common/footer";
import Header from "components/common/header";
import DummyHeader from "components/common/dummyHeader";
import SignUp from "components/common/signUp";
import Reminder from "components/common/reminder";

import favicon from "favicon.ico";

import { loadHeap } from "./api";

import "css/main.scss";

export default class Layout extends React.Component {
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
    } catch (e) {
      console.error(e);
    }
  }

  componentDidUpdate() {
    // Wait a bit for react helmet to kick in, then update URL (Not bulletproof)
    if (process.NODE_ENV === "production") {
      setTimeout(this.trackRemarketing, 500);
    }
  }

  componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      // Load HEAP
      loadHeap();

      // Wait a little bit to ensure deferred script has finished loading. (Not bulletproof)
      //setTimeout(this.trackRemarketing, 500);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Voltera | Build Hardware Faster</title>
          <meta name="description" content="Prototype on your desktop with the Voltera V-One PCB Printer" />
          <meta name="keywords" content="pcb, printer, circuit, board, 3d, factory" />
          <meta name="author" content="Jesus Zozaya" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@voltera_io" />
          <meta property="og:url" content="https://www.voltera.io" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Voltera | Build Hardware Faster" />
          <meta property="og:image" content="https://www.voltera.io/v-one.png" />
          <meta property="og:description" content="Prototype on your desktop with the Voltera V-One PCB Printer" />
          <meta property="og:site_name" content="Voltera V-One. Prototyping tool." />
          <meta property="og:locale" content="en_US" />
          <meta property="article:author" content="" />
          <link rel="shortcut icon" href={favicon} />
          <script defer="defer" type="text/javascript" src="https://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8" />
        </Helmet>
        <Header pageName={this.props.pathname} />
        <SignUp />
        <Reminder />
        <DummyHeader />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
