import React from 'react'
import YouTube from 'components/common/youtube'
import Button from 'components/common/button'
import './teaser.scss'

export default class Feature extends React.Component {

  render() {
    return (
      <div className="teaser flex-row paste-reverse">
        <div className="description">
          <h2>Skip the soldering iron.</h2>
          <p>Focus on designing, not soldering. Regardless if they came from <strong>from a factory, or from your desk</strong> -  just mount your board on the V-One and off you go.</p>
          <p>Say goodbye to stencils and <strong>cut your assembly time in half.</strong> Assembling boards is easy - it is quick turn PCBA at your desk!</p>
          <div className="button-wrap">
            <Button label="Learn More" internal url="/features/paste/" color="dark"/>
          </div>
        </div>
        <YouTube
          videoId="NdJQ5Xl4jkw"
          url="/selector/dispense-solder-paste.jpg"
          width="600"
        />
      </div>);
    }
  }
