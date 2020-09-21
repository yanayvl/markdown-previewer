import React from 'react';
import './App.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.markdown,
    }

    this.handleChange = this.handleChange.bind(this);
  }


  handleChange = (event) => {   
    
    this.setState({
      text: event.target.value,
    })
  }


  render() {
    return (
      <>
      
        <div className="row" id="header"></div>
  
        <div className="row">
          <div className="col-xs-2"></div>
          <div className="col-xs-8">
            <form className="form-horizontal">
            <textarea className="form-control input-lg" id="editor" rows="15" type="text" onChange={this.handleChange} value={this.state.text} />
            </form>
          </div>
          <div className="col-xs-2"></div>
        </div>
    
      </>
    );
  }
  
}

export default Editor;
