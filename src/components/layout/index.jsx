import React from "react";
import Helmet from "react-helmet";
import Footer from "components/common/footer";
import Header from "components/common/header";
import DummyHeader from "components/common/dummyHeader";
import SignUp from "components/common/signUp";
import Reminder from "components/common/reminder";

import favicon from "favicon.ico";

import "css/main.scss";

export default class Layout extends React.Component {
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
          <link rel="shortcut icon" type="image/x-icon" href={favicon} />
        </Helmet>
        <Header pageName={this.props.pathname} />
        <SignUp />
        <Reminder pageName={this.props.pathname} />
        <DummyHeader />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
