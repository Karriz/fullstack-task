import React, { useState, useEffect } from 'react';
import './App.css';

import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

function App() {
  const client = axios.create({
    baseURL: ''
  });

  const [books, setBooks] = useState([]);

  useEffect(() => {
      client.get('books/').then((response) => {
        setBooks(response.data);
      });
  }, [client]);

  return (
    <div className='App'>
      <Container>
        <Row>
        <Col>
        <Form className='book-form'>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Author" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Description" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Col>

      <Col>
      <ListGroup className='book-list'>
            {books.map((book) => {
              return (
                <ListGroup.Item>{book.title}</ListGroup.Item>
                  //<div className="book-item" key={book.id}>
                  //  <h2 className="book-title">{book.title}</h2>
                  //  <h2 className="book-author">{book.author}</h2>
                  //  <p className="book-description">{book.description}</p>
                  //</div>
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
