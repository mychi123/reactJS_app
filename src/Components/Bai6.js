import React, { Component} from "react";
import  './Style.css'
class Display extends React.Component {
    render() {
      return (
        <h2 class="abc">
           <div>Bài 6:</div>
          <p>{this.props.color}</p>
          <p>{this.props.num}</p>
          <p>{this.props.size}</p>
        </h2>
      );
    }
  }
   
  class Label extends React.Component {
    render() {
      return (
        <Display color={this.props.color}
                 num={this.props.num}
                 size={this.props.size}/>
      );
    }
  }
   
  class Shirt extends React.Component {
    render() {
      return (
        <div>
         
          <Label color={this.props.color}
                 num={this.props.num}
                 size={this.props.size}/>
        </div>
      );
    }
  }

export default Shirt;
