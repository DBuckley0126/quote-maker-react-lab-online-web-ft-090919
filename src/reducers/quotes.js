export default (state = [], action) => {
  let foundQuote = state.find(quote => quote.uuid === action.payload)
  switch (action.type){
    case "ADD_QUOTE":
      console.log(action)
      return (
        [...state, action.payload]
      )
    case "REMOVE_QUOTE":
      if(foundQuote){
        return (
          state.filter(quote => quote !== foundQuote)
          )  
      }
      return state
    case "UPVOTE_QUOTE":
      if(foundQuote){foundQuote.votes += 1}
      return (
        [...state]
      )
    case "DOWNVOTE_QUOTE":
      console.log(action)
      
      if(foundQuote){foundQuote.votes -= 1}
      return (
        [...state]
      )
    default:
      return state  
  }

}
