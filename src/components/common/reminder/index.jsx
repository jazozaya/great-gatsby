import React from "react";
import style from "./reminder.module.scss";

import { Link } from "gatsby";

export default class Header extends React.Component {
  render() {
    const { pageName } = this.props;

    if (pageName.startsWith("/docs")) {
      return null;
    }

    return (
      <div className={style.wrapper}>
        <Link className={`${style.tab} ${style.buyNow}`} to="/store/">
          Buy Now
        </Link>
        <Link className={`${style.tab} ${style.requestQuote}`} to="/request/quote/">
          Get Quote
        </Link>
      </div>
    );
  }
}
