import React from 'react';
import SpinnerLoader from 'components/common/spinnerLoader';
import HubspotForm from 'react-hubspot-form';

import './hubspot.scss';
import './common.scss';

export default class QuoteRequest extends React.Component {
  renderLoading() {
    return (
      <div>
        <p className='pull-center'>We are preparing the form.</p>
        <SpinnerLoader />
        <p className='pull-center'>This should only take a minute.</p>
      </div>
    );
  }

  render() {
    return (
      <div className='request-wrapper'>
        <div className='request hubspot'>
          <HubspotForm
            portalId='5264434'
            formId='d958cb4c-f1f2-44cf-8182-9c752f096cc3'
            loading={this.renderLoading()}
          />
        </div>
      </div>
    );
  }
}
