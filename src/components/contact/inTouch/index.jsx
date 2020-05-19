import React from "react";
import Button from "components/common/button";

import "./intouch.scss";


import quoteIcon from "./quote.min.svg";

export default class InTouch extends React.Component {
  render() {
    return (
      <div className="in-touch flex-row">
        <div className="action">
          <img src={quoteIcon} alt="" />
          <p>Tell us your contact and shipping information and we'll send you a quote!</p>
          <div className="button-wrap">
            <Button label="Get a Quote" url="/request/quote/" internal={true} color="dark" />
          </div>
        </div>
      </div>
    );
  }
}
