import React from "react"
import { connect } from "react-redux"

import { generatePDF} from "../actions/pdfActions"

@connect((store) => {
  return {
    pdf_filename:store.pdf.pdf_filename
  };
})
export default class Layout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      json:'',
      template: ''
    }
  }

  send(){
    this.props.dispatch(generatePDF(this.state));
  }

  update(event){
    let updates = {};
    updates[event.currentTarget.name] = event.currentTarget.value;
    this.setState(updates);
    console.log(this.state);
  }

  render() {

    // Generate a link to the file
    const link = this.props.pdf_filename.length ?
        <a target="_new" href={this.props.pdf_filename}>click to view PDF</a>:
        '';

    return <div class="container">
      <div class="row">
          <div class="col-lg-12">
            <h1>Test Client for Smash PDF</h1>
            <textarea class="form-control" name="json" onKeyUp={this.update.bind(this)} ></textarea>
            <textarea  class="form-control" name="template" onKeyUp={this.update.bind(this)}></textarea>
            <a onClick={this.send.bind(this)} class="btn btn-lg btn-success">Send Test Document</a>
            <h2>{link}</h2>
            </div>
        </div>
    </div>
  }
}
