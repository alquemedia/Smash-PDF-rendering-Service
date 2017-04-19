import React from "react"
import { connect } from "react-redux"

import { generatePDF} from "../actions/pdfActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  send(){
    this.props.dispatch(generatePDF());
  }
  render() {
    return <div class="container">
      <div class="row">
          <div class="col-lg-12">
            <h1>Test Client for Smash PDF</h1>
            <a onClick={this.send.bind(this)} class="btn btn-lg btn-success">Send Test Document</a>
            </div>
        </div>
    </div>
  }
}
