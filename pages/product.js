import React from 'react'
import DummyHeader from 'components/common/dummyHeader'
import Helmet from 'react-helmet'

export default class MyGallery extends React.Component {

  render() {
    return (
      <div>
        <DummyHeader />
        <p>this is my product</p>
      </div>
    )
  }
}
