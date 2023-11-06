import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
    let {title,description, imageUrl,newsUrl} = this.props;
    return (
      <div className='my-3'>
        
        <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://th.bing.com/th/id/OIP.TaB5MxTYEuyQWZdsmy6l5QHaHa?pid=ImgDet&rs=1":imageUrl} className="card-img-top" alt="/"/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a rel="noreferrer" href={newsUrl} target="_blank"  className="btn btn-dark">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
