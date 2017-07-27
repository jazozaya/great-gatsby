import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

export default class Educate extends React.Component {

  render() {
    return (
      <div>
        <h2>Educate With Voltera</h2>
        <Collapse>
          <Panel header="Do you provide education discounts?">
            Yes! Since consumables can be used up quickly when many students are using the V-One, we offer a discount on our common consumable materials.  Reach out to sales@voltera.io to find out more.
          </Panel>
          <Panel header="Do you provide an electronics curriculum?">
            We want to! If you have ideas or are able to help make this dream a reality, please contact hello@voltera.io.  Thank you!
          </Panel>
        </Collapse>
      </div>);
    }
  }
