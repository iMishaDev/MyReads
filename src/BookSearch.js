import React from 'react'
import Book from './Book.js'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
class BookSearch extends React.Component {
 state = {
   searchedText: '',
   booksResults : []
 };


 handleChange = (query) => {
  
   this.setState({searchedText: query});
 if(query.length > 1) {
   BooksAPI.search(query.trim(), 20).then((data) => {
     this.shelfize(data)
     this.setState({booksResults: data});
   }).catch(() => {
     this.setState({booksResults: []});
   })
   }
  }

shelfize = (books) => {
  if (books)
   books.map((book) => book.shelf = "null")
}


  render () {
    
   let books = this.state.booksResults.map((book, index) => 
              		<Book key={index} books={this.props.data} book={book} onChange={this.props.onChange} />
            ) 
    
    return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper"> 
				<form>
                <input type="text" value={this.state.searchedText} onChange={(event) => this.handleChange(event.target.value) } placeholder="Search by title or author"/>
				</form>
              </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
            {books}
            
	</ol>
            </div> </div>
    )
  }

}


export default BookSearch