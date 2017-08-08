import React from 'react'

import Collapse from 'rc-collapse'
var Panel = Collapse.Panel;

import Template from './template'

export default class SoftwareFAQ extends React.Component {

  render() {
    const { title, all } = this.props;
    return (
      <Template title={title} all={all}>
        <Collapse>
          <Panel header="Is the software free?">
            <p>Yep! The software is required to operate the V-One. You can download a copy of it at <a target="_blank" href="http://voltera.io/downloads">here</a>.</p>
          </Panel>
          <Panel header="Do I have to learn a new CAD tool?">
            <p>The Voltera software allows you to use whatever CAD tool you are already comfortable with!  Export your designs as Gerbers and upload to our software.  Easy as that!</p>
          </Panel>
          <Panel header="Does it update automatically?">
            <p>Think of apps on your phone. Your software will automatically update with new features, bug fixes, and user experience upgrades. Many of the updates come directly from our users suggestions. Check out our <a target="_blank" href="https://github.com/VolteraInc/styx/releases">release notes</a> to learn more.</p>
          </Panel>
          <Panel header="This doesn't look like software I'm used to.">
            <p>We hate when a perfectly good piece of equipment sits on a shelf collecting dust because no one knows how to operate it.</p>
            <p>At Voltera we take user experience very seriously and have made sure your first print experience is as smooth as possible. This means anybody in your organization can use it!</p>
          </Panel>
        </Collapse>
      </Template>
    );
  }
}
