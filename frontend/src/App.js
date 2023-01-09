import React, { useState, useEffect } from 'react';
import './App.css';

import axios from "axios";

function App() {
  const client = axios.create({
    baseURL: ""
  });

  const [books, setBooks] = useState([]);

  useEffect(() => {
      client.get("books/").then((response) => {
        setBooks(response.data);
      });
  }, [client]);

  return (
    <div className="App">
      <header className="App-header">
          <div className="book-list">
            {books.map((book) => {
              return (
                  <div className="book-item" key={book.id}>
                    <h2 className="book-title">{book.title}</h2>
                    <h2 className="book-author">{book.author}</h2>
                    <p className="book-description">{book.description}</p>
                  </div>
                );
            })}
        </div>
      </header>
    </div>
  );
}

export default App;
