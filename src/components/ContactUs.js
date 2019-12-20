import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lightText">
              Feel free to contact me for any work or suggestions.
              <br/>Email : {resumeData.emailid}
              </p>
            </div>
          </div>
        </section>
        );
  }
}