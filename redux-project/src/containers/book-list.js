import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return <li key={book.title} className="list-group-item">{book.title}</li>
        });
        console.log(blah);
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

// using connect will auto refresh
export default connect(mapStateToProps)(BookList);