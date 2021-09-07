import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


const books = [
  {
  id:1,
  img:  'https://images-na.ssl-images-amazon.com/images/I/81lsmyMcYNL._AC_UL160_SR160,160_.jpg',
  title : 'Greenlights',
  author : 'Matthew McConaughey'},
  {
  id:2,
  img:  'https://images-na.ssl-images-amazon.com/images/I/81ej-GuREkL._AC_UL160_SR160,160_.jpg',
  title : 'reenlights',
  author : 'Matthew McConaughey',
},
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}


const Book = (props) => {
  const {img, title, author} = props.book;
  return (
     <article className="book">
     <img src={img} alt="Logo" />
     <h1>{title}</h1>
     <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList/>, document.getElementById('root'));