import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, downVoteQuote, upVoteQuote} from '../actions/quotes'

class Quotes extends Component {

  renderQuotes = () => {
    return (
      this.props.quotes.map(quote => <QuoteCard key={quote.uuid} quote={quote} downVoteQuote={this.props.downVoteQuote} upVoteQuote={this.props.upVoteQuote} removeQuote={this.props.removeQuote} />)
    )
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
               {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
export default connect(state=>({ quotes: state.quotes }), {downVoteQuote, upVoteQuote, removeQuote})(Quotes)
