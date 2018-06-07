import React from 'react'
import BookShelfChanger from './BookShelfChanger.js'

class Book extends React.Component {
  
  render () {
return (
<li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+this.props.book.imageLinks.smallThumbnail +')' }} ></div>
                            <BookShelfChanger onChange={this.props.onChange} books={this.props.books} book={this.props.book}/>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
						{this.props.book.authors.map( (author, index) => 
								<div key={index} className="book-authors">{author}</div>)
}
                        </div>
                      </li>
)
}
}
export default Book