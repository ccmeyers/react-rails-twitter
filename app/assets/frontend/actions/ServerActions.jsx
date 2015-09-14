import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS, //used by store's conditional statements to say what to do with data
      rawTweets //shorthand for rawTweets: rawTweets
    })
  },
  receivedOneTweet(rawTweet) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  }
}
