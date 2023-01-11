import React, { useState, useEffect } from 'react';
import './App.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BooksApi } from './BooksApi';

const booksApi = new BooksApi('');

function App() {
  const [books, setBooks] = useState([]);
  const [activeBook, setActiveBook] = useState({
    id: null,
    title: "",
    author: "",
    description: ""
  });

  useEffect(() => {
    refreshBooks();
  }, []);

  const refreshBooks = () => {
    booksApi.getBooks().then((response) => {
      setBooks(response.data);
    }).catch(error => {
      console.error('Encountered error while refreshing books list', error)
   });
  }

  const createBook = (content) => {
    booksApi.createBook(content).then((response) => {
      refreshBooks();
      setActiveBook(response.data);
    }).catch(error => {
      console.error('Encountered error while creating book', error)
   });
  }

  const editBook = (id, content) => {
    booksApi.editBook(id, content).then((response) => {
      refreshBooks();
    }).catch(error => {
      console.error('Encountered error while editing book', error)
   });
  }
  
  const deleteBook = (id) => {
    booksApi.deleteBook(id).then((response) => {
      refreshBooks();
      setActiveBook({
        id: null,
        title: "",
        author: "",
        description: ""
      });
    }).catch(error => {
      console.error('Encountered error while deleting book', error)
   });
  }

  const bookSelected = (book) => {
    console.log(book.title);
    setActiveBook(book);
  };

  const authorChanged = (event) => {
    setActiveBook({
      id: activeBook.id,
      author: event.target.value,
      title: activeBook.title,
      description: activeBook.description
    })
  }
  
  const titleChanged = (event) => {
    setActiveBook({
      id: activeBook.id,
      author: activeBook.author,
      title: event.target.value,
      description: activeBook.description
    })
  }
    
  const descriptionChanged = (event) => {
    setActiveBook({
      id: activeBook.id,
      author: activeBook.author,
      title: activeBook.title,
      description: event.target.value,
    })
  }

  return (
    <div className='App'>
      <Container>
        <Row>
        <Col>
        <Form className='book-form'>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" placeholder="Title" value={activeBook.title} onChange={titleChanged} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control required type="text" placeholder="Author" value={activeBook.author} onChange={authorChanged} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Description" value={activeBook.description} onChange={descriptionChanged} />
          </Form.Group>
          <Button variant="primary" type="button"
            onClick={() => createBook(activeBook)}>
            Save New
          </Button>
          <Button variant="primary" type="button" className='ms-2' disabled={activeBook.id===null}
            onClick={() => editBook(activeBook.id, activeBook)}>
            Save
          </Button>
          <Button variant="danger" type="button" className='ms-2' disabled={activeBook.id===null}
            onClick={() => deleteBook(activeBook.id)}>
            Delete
          </Button>
        </Form>
      </Col>

      <Col>
      <ListGroup className='book-list'>
            {books.map((book) => {
              return (
                <ListGroup.Item key={book.id} action onClick={() => bookSelected(book)}
                  active={activeBook.id===book.id}>
                  <Container>
                    <Row><span>{book.title}</span></Row>
                    <Row><small>{book.author}</small></Row>
                  </Container>
                </ListGroup.Item>
                );
            })}
        </ListGroup>
        </Col>
        </Row>
        </Container>
    </div>
  );
}

export default App;
