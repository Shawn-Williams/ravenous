import React from 'react';

import Business from '../Business/Business';
import './BusinessList.css';

class BusinessList extends React.Component {
  
  getYelpReviews = this.props.getYelpReviews;
  showReviews = this.props.showReviews;

  render() {
      return (
        <main className="BusinessList">
          {this.props.businesses.map((business, index) => {
            return <Business key={business.id} business={business} getYelpReviews={this.getYelpReviews} />;
          })}
        </main>
      )
  }
}

export default BusinessList;