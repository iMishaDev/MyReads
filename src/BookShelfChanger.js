import React from 'react'


class BookShelfChanger extends React.Component {


  render () {
    let shelf = 'null';
 
    const books = this.props.books;
    for (let bookItem of books) {
      if ( bookItem.id === this.props.book.id )
        	shelf = bookItem.shelf
    }
	return (
		<div className="book-shelf-changer">
                  <select value={shelf} onChange={(event) => this.props.onChange(this.props.book, event.target.value)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="null">None</option>
                   </select>
         </div>
)
  }
}

export default BookShelfChanger