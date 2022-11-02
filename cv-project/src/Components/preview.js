import React, { Component } from "react";

class Preview extends Component {


  render() {
    return (
        <div className="preview">
            <input id="previewButton" type='button' value={this.props.name} onClick={()=>this.props.button()}/>
        </div>
    )
  }
}

export default Preview;