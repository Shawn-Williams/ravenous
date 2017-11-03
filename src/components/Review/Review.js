import React from 'react';
import './Review.css';

export class Review extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hasAvatar: true
		}
	}

	displayReviewStars(rating){
		let fullStar = rating - rating % 1;
		let stars = [];
		if(rating % 1 === 0) {
			for (let i = 0; i < fullStar; i++) {
				stars.push(1)
			}
			return stars;
		} else {
			for (let i = 0; i < fullStar; i++) {
				stars.push(1)
			}
			stars.push(.5);
			return stars;
		}
	}
	
	render() {
		return (
			<div className='review-single'>
				<div className='review-avatar-wrapper'>
					<img src={this.props.review.user.image_url} alt='Reviewer avatar' /> 
				</div>
				<div className='review-content'>
					<h3>{this.props.review.user.name}</h3>
					<p>{this.props.review.text}</p>
					<div className='review-stars'>{this.displayReviewStars(this.props.review.rating).map((star, i) => {
						if(star === 1) {
							return <i className="fa fa-star" aria-hidden="true" key={i}></i>
						}
						else return <i className="fa fa-star-half-o" aria-hidden="true" key={i}></i>
					})}
					</div>
				</div>
			</div>
		)
	}
}