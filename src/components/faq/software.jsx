import React from 'react'

import Question from './utils/question'
import Template from './utils/template'

export default class SoftwareFAQ extends React.Component {

  render() {
    const { title, all, id } = this.props;
    return (
      <Template id={id} title={title} all={all}>
        <Question underline title="Is the software free?">
          <p>Yep! The software is required to operate the V-One. You can download a copy of it at <a target="_blank" href="http://www.voltera.io/downloads">here</a>.</p>
        </Question>
        <Question underline title="Do I have to learn a new CAD tool?">
          <p>The Voltera software allows you to use whatever CAD tool you are already comfortable with! You can use EAGLE, Altium, KiCad, Mentor Graphics, Cadence, DipTrace and more! Just export your designs as Gerbers and upload to our software. Easy as that!</p>
        </Question>
        <Question underline title="Does it update automatically?">
          <p>Think of apps on your phone. Your software will automatically update with new features, bug fixes, and user experience upgrades. Many of the updates come directly from our users suggestions. Check out our <a target="_blank" href="https://github.com/VolteraInc/styx/releases">release notes</a> to learn more.</p>
        </Question>
        <Question title="Is the software complicated to use?">
          <p>We hate it when a perfectly good piece of equipment sits on a shelf collecting dust because no one knows how to operate it. That won't happen with the V-One.</p>
          <p>At Voltera, we're obsessed with user experience and take it very seriously. We've gone to great lengths and invested a lot of time in making sure your first print experience is a pleasant one. Whether you're a student, teacher, parent, engineer, or rocket scientist, we made the software friendly and easy for everyone to use.</p>
        </Question>
      </Template>
    );
  }
}
