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
            <p>We will be in touch soon! Until then, download<br />our overview PDF to learn more!</p>
            <div className="button-wrapper">
              <Button label="Download Overview" url="/pdfs/Voltera-Overview.pdf" color="dark"/>
            </div>
          </div>
        </div>
      </div>);
    }
  }
