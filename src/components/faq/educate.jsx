import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

import Template from './template'

export default class EducateFAQ extends React.Component {

  render() {
    const { title, all } = this.props;
    return (
      <Template title={title} all={all}>
        <Collapse>
          <Panel header="Do you provide education discounts?">
            Yes! Since consumables can be used up quickly when many students are using the V-One, we offer a discount on our common consumable materials. Reach out to <strong>sales@voltera.io</strong> to find out more.
          </Panel>
          <Panel header="Do you provide an electronics curriculum?">
            We want to! If you have ideas or are able to help make this dream a reality, please contact <strong>hello@voltera.io</strong>.  Thank you!
          </Panel>
        </Collapse>
      </Template>
    );
  }
}
