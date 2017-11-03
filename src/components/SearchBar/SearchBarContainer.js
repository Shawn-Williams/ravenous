import React from 'react';
import { SearchBar } from './SearchBar';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated' : 'rating',
    'Most Reviewed' : 'review_count'
}

export class SearchBarContainer extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { term: '' , location: '', sortBy: 'best_match'};
        this.getSortByClass = this.getSortByClass.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(
            sortByOption => {
                let sortByOptionValue = sortByOptions[sortByOption];
                return <li 
                    key={sortByOptionValue} 
                    className={this.getSortByClass(sortByOptionValue)} 
                    onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
                    >{sortByOption}</li>
            });
            
    } 

    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } return '';
    }

    handleSortByChange(sortByOption) {
        this.setState({ sortBy :  sortByOption });
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value});
    }

    handleLocationChange(e) {
        this.setState({location: e.target.value});
    }

    handleSearch(e) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
        e.preventDefault();
    }
    render() {
        return <SearchBar options={this.renderSortByOptions()} />
    }
};
