import React from "react";

class Buttonwood extends React.Component{
    render(){
        console.log(this.props.outline);
        return <button className={`button ${this.props.outline ? "button--ouline" : ""}`}>
            {this.props.children}</button>
    }
}

export default Buttonwood