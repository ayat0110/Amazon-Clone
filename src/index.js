import React from 'react';
import ReactDOM from 'react-dom';
import ReactBook from './book1.jpg';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title/>
      <Author/>
    </article>
  );
}

function Image() {
  // Import result is the URL of your image
  return <img src={ReactBook} alt="Logo" />;
}

const Title = () => {
  return <h1>Greenlights</h1>;
};
const Author = () => {
  return <h4>Matthew McConaughey</h4>;
};

ReactDOM.render(<BookList/>, document.getElementById('root'));