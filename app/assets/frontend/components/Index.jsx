import React from 'react';
import { Link } from 'react-router';
import TweetBox from './TweetBox';
import TweetsList from './TweetsList';
import TweetStore from '../stores/TweetStore';

import TweetActions from '../actions/TweetActions';

let getAppState = () => {
  // view getting tweets from store
  return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    //in ES6 we need to manually bind component functions to this
    this._onChange = this._onChange.bind(this);
  }
  componentDidMount() {
    TweetActions.getAllTweets();
    TweetStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container">
        <Link to='/follow'>Who to follow</Link>
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList} />
      </div>
    );
  }
}
