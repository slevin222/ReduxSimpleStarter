import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class Booklist extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className='list-group-item'>
                    {book.title}
                </li>
            );
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

function mapStateToProps(state) {
    //return will show up as props inside of container booklist, usually an object
    //when app state changes this continer will auto rerender aith new list off books
    //the object in state function will also be assigned a props- Usingconnect
    return {
        books: state.books
    }
}


//Anything returned from this function will end up as props on this container
function mapDispatchToProps(dispatch) {
    //whenever seletBook is called the result should be passed to all our reducers
    //
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
//Promote Books from a component to a container it needs to know about this new dispatch method, 
//seletBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);