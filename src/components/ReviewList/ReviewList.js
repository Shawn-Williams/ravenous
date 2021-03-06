import React from 'react';
import { Review } from '../Review/Review'

import './ReviewList.css'

class ReviewList extends React.Component {

	componentWillMount() {
		window.scroll({ top: 500, behavior: 'smooth' });
	}

	componentWillUpdate() {
		window.scroll({ top: 500, behavior: 'smooth' });
	}

	render() {
		return (
			<section className="review-list-wrapper">
				<div className='review-list'>
					<div className='review-list-header'>
						<h2>{this.props.name}</h2>
						<button onClick={this.props.hideReviews}>Close</button>
					</div>
					<div>
						{this.props.reviews.map((review, index) => {
							return <Review key={index} review={review}  />
						})}
					</div>
				</div>
			</section>
		)
	}
}

export default ReviewList;