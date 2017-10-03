import React from 'react'
import { collections as c } from 'components/store/constants'
import Collection from 'components/store/collection'

export default class MySwag extends React.Component {

  render() {
    return (
      <section className="store-wrapper">
        <h1>Welcome to our Store</h1>
        <p className='pull-center'>Whether you are printing your first circuit, or picking up your fifth solder paste cartridge, you will find what you need here. Everything you need to build hardware faster with the Voltera V-One.</p>
        <Collection collectionId={c.inks.id}/>
      </section>
    )
  }
}
