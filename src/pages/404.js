import React from "react";
import Helmet from "react-helmet";
import Layout from "components/layout";

export default class MyLanding extends React.Component {
  sendEmail(emailParams) {
    try {
      // Change state to sending.
      window.emailjs.init("user_a6VUHHdymj1y3WbePDyCm");
      window.emailjs
        .send("gmail", "quick_question", emailParams)
        .then(response => console.log("404 Email Sent!", response), err => console.log("404 Email Failed", err));
    } catch (e) {
      console.error(e.message);
    }
  }

  componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      const email = "jesus@voltera.io";
      const emailParams = {
        timestamp: Date(),
        subject: "404 - Bad Page",
        to_email: email,
        reply_to: email,
        email: email,
        from_name: email,
        question: document.URL
      };
      setTimeout(() => this.sendEmail(emailParams), 500);
    }
  }
  render() {
    return (
      <Layout pathname={this.props.location.pathname}>
        <section className="not-found">
          <Helmet>
            <title>Voltera | Page Not Found (404)</title>
            <meta
              name="description"
              content="We recently updated our website and it's possible we broke some things along the way. Sorry!"
            />
            <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js" />
          </Helmet>
          <h1>Uh Oh! 404 Page not found!</h1>
          <p>You've requested a page that does not exist anymore.</p>
          <p>
            We recently updated our website and it's possible we broke some things along the way. Please let us know what you are looking
            for by emailing <strong>support@voltera.io</strong>.
          </p>
        </section>
      </Layout>
    );
  }
}
