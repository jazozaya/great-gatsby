import React from 'react'
import Button from 'components/common/button'

import LogoIcon from './logo-emblem-dark.min.svg'

import './article.scss'

export default class Contact extends React.Component {

  render() {
    const text= "Check out this post by Voltera"
    const { title, author, published, content, src } = this.props.data;
    return(
      <section className="article-wrapper">
        <div className="preamble">
          <img src={LogoIcon}/>
          <div>
            <h2>{author}</h2>
            <p><i>On a mission to modernize electronics prototyping.</i></p>
            <p>{published}</p>
            <p>Read on <a target="_blank" href={src}>Medium</a></p>
          </div>
        </div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}/>
        <div className="pull-center">
          <Button label="Follow us on Medium" url={src} internal={false} color="dark" />
        </div>
      </section>
    )
  }

}
