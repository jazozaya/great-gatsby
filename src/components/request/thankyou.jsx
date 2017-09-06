import React from 'react'
import { Redirect } from 'react-router'

import './common.scss'

import Button from 'components/common/button'

export default class QuoteRequest extends React.Component {

  render() {
    return (
      <div className="request-wrapper">
        <div className="request">
          <div className="pull-center">
            <h1>Success!</h1>
            <p>We have received your request. We will be in touch soon!</p>
            <div className="button-wrapper">
              <Button label="Return" url={"/"} color="dark" internal/>
            </div>
          </div>
        </div>
      </div>);
    }
  }
