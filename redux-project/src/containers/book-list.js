import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return <li 
            key={book.title} 
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">{book.title}
            </li>
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// THIS IS THE GLUE FUNCTION
function mapStateToProps(state) {
    // whatever is returned will show up as props 
    // inside book list
    return {
        books: state.books
    };
}

// anything returned will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenerever slectbook is called the result should be passed to all our reducers
    return bindActionCreators({ selectBook }, dispatch);
}

// using connect will auto refresh
// promote 
export default connect(mapStateToProps, mapDispatchToProps)(BookList);