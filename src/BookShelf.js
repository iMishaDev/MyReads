import React from 'react'
import Book from './Book.js'

class BookShelf extends React.Component {

  render () {
       
    return (
      <div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.shelf.title}</h2>
                  <div className="bookshelf-books">
                   <ol className="books-grid">
          { this.props.data.map((book, index )=> 
          				<Book key={index} book={book} books={this.props.data} shelf={this.props.shelf} onChange={this.props.onChange}/>
        )}
                    </ol>
                  </div>
                </div>
)
}
}

export default BookShelf