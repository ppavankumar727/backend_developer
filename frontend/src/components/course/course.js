import React from 'react';

export class Course extends React.Component{
    render(){
        return (
<div className="card" style={{width: '18rem'}}>
<img src="..." className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">{this.props.title}</h5>
  <p className="card-text">Author :{this.props.author}</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div>
          );
      
    }
}
