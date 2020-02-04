// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: 'ADD_QUOTE',
    payload: quote
  }
}

export const removeQuote = (quoteId) => {
  return {
    type: 'REMOVE_QUOTE',
    payload: quoteId
  }
}

export const upVoteQuote = (quoteId) => {
  return {
    type: 'UPVOTE_QUOTE',
    payload: quoteId
  }
}

export const downVoteQuote = (quoteId) => {
  return {
    type: 'DOWNVOTE_QUOTE',
    payload: quoteId
  }
}