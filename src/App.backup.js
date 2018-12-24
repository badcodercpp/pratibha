import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import isTestable from './pratibha/test/test'
import { WritableMap, ReadableMap } from './pratibha/@core/map';
//import {Link} from './pratibha/@component/@core/index'
import { Link, P, Div } from './pratibha/@decorator/index'

let w=new WritableMap([{a:"hi ajay",b:"hello pratibha"}]);
let x=w.create()

console.log("Writable map")
console.log(x)

let r= new ReadableMap(x)
let read=r.read();

console.log("readable map")
console.log(read)






@Link()
@P()
@Div()
class App extends Component {
  _click_p=e=>{
    e.preventDefault();
    e.stopPropagation();
    alert("hi")
  }
  render() {
    console.log(this.constructor.Link)
    console.log(this.constructor.P)
    return (
      <div className="App">
        {
            this.constructor.isTestable
        }
        {
            this.constructor.Link({href:"/ajay_jha",style:{color:"red"}},"click me")
        }
        {
            this.constructor.Link({href:"/haha",style:{color:"blue"}},"click me different action")
        }
        {
            this.constructor.P({style:{color:"green"},onClick:this._click_p},"clickable paragraph")
        }
        {
            this.constructor.Div({style:{color:"green"},onClick:this._click_p},
            [
              this.constructor.Link({href:"/ajay_jha",style:{color:"yellow"},key:0},"clickable as children"),
              this.constructor.P({style:{color:"green"},onClick:this._click_p,key:1},"clickable paragraph")
            ])
        }
      </div>
    );
  }
}

export default App;
