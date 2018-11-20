import React from "react";
import SideBar from "./sidebar";
import Search from './search';
import CallToAction from "components/common/cta";

import s from "./docs.module.scss";
import "./markdown.scss";

// THIS FILE IS USED BY THE TEMPLATE.

export default class Docs extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <section className={s.wrapper}>
          <SideBar details={this.props.details} />
          <div className={s.document}>{this.props.children}</div>
        </section>
        <CallToAction
          title="Can't find something?"
          subtitle="Let us know. We can help."
          buttonOne={{
            label: "Contact Us",
            url: "/contact/",
            internal: true
          }}
        />
      </div>
    );
  }
}
