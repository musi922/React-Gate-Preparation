import React from "react";

export default class Name extends React.Component{
   constructor(props){
      super({props})
      this.state={
         count:0
      }
   }
   increment=()=>{
      this.setState({count:this.state.count+1})
   }
   render(){
      const styleElement={
         color:"Red"
     }
    return (
      <>
      <h1 style={styleElement}>{this.state.count}</h1>
      <button onClick={this.increment}>increase</button>
      <h2>{this.props.name}</h2>
      </>
    )
   }
}