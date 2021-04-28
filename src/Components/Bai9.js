import React, { Component} from "react";
import  './Style.css'

class Bai9 extends Component{
    constructor(){
        super()
        this.state={
            message:'Bài 9'
        }
    }
    render(){
        return<h2 class="bai9">{this.state.message}</h2>
       
    }
}
export default Bai9;