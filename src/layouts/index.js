import React from "react"
import Helmet from "react-helmet"
import Footer from 'components/common/footer'
import Header from 'components/common/header'
import DummyHeader from 'components/common/dummyHeader'
import favicon from 'favicon.ico';

import 'css/main.scss'

module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },

  componentDidMount() {

    try{
      if (process.env.NODE_ENV === 'production') {
        window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(e){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var e=this.createElement("script");n&&(this.domain=n),e.id="js-iframe-async",e.src="https://assets.zendesk.com/embeddable_framework/main.js",this.t=+new Date,this.zendeskHost="voltera.zendesk.com",this.zEQueue=a,this.body.appendChild(e)},o.write('<body onload="document._l();">'),o.close()}();
      }
    } catch(e) {
      console.log(e)
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

          <meta property="og:url" content="https://voltera.io" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Voltera | Build Hardware Faster" />
          <meta property="og:image" content="https://voltera.io/v-one-box-min.png" />
          <meta property="og:description" content="Prototype on your desktop with the Voltera V-One PCB Printer" />
          <meta property="og:site_name" content="Voltera V-One. Prototyping tool." />
          <meta property="og:locale" content="en_US" />
          <meta property="article:author" content="" />

          <link rel="shortcut icon" href={favicon} />
          <script defer="defer" type="text/javascript" src="https://www.googleadservices.com/pagead/conversion_async.js" charset="utf-8"></script>
        </Helmet>
        <Header pageName={this.props.location.pathname} />
        <DummyHeader />
        {this.props.children()}
        <Footer />
      </div>
    )
  },
})
