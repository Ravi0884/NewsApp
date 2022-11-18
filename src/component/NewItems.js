import React, { Component } from 'react'

export class NewItems extends Component {
     render() {
      let {title,description,image,adddress,author,date} = this.props;
    return (
      <div className="card">
      <img src= {image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className=" text-muted">
          By {author?author:"Unknown"} on {new Date(date).toGMTString()}
    </div>
        <a href={adddress} target="_blank"  rel="noreferrer" className="btn btn-primary">Read More</a>
      </div>
    </div>
    )
  }
}

export default NewItems