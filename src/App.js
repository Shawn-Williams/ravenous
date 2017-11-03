import React, { Component } from 'react';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';
import ReviewList from './components/ReviewList/ReviewList';
import { Yelp } from './util/Yelp';
import './App.css';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
      reviews: [],
      showReviews: false
    };
    this.searchYelp = this.searchYelp.bind(this);
    this.getYelpReviews = this.getYelpReviews.bind(this);
    this.hideReviews = this.hideReviews.bind(this);
  }

  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy)
      .then(businesses => {
        this.setState({
          businesses: businesses
        });
      });
  }

  getYelpReviews(id, name) {
    const businessName = name;
    Yelp.getReviews(id)
      .then(reviews => {
        this.setState({
          businessName: businessName,
          reviews: reviews,
          showReviews: true
        });
      });
  }

  hideReviews() {
    this.setState({
      showReviews: false
    })
  }

  render() {
    const showReviews = this.state.showReviews;
    let reviewList = null;
    if(showReviews) {
      reviewList = <ReviewList reviews={this.state.reviews} hideReviews={this.hideReviews} name={this.state.businessName}/>;
    }

    return (
      <div className="App">
      <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <main>
          <BusinessList  businesses={this.state.businesses} getYelpReviews={this.getYelpReviews} />
          {reviewList}
        </main>
      </div>
    );
  }
}

export default App;
