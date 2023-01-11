import axios from 'axios';

/**
 * Provides functions for accessing books API
 */
class BooksApi {

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.client = axios.create({
            baseURL: baseUrl
        });
    }

    /**
     * Get all books
     */
    getBooks() {
        return this.client.get('books/');
    }

    /**
     * Delete a book with given id
     * @param {*} id Book id
     */
    deleteBook(id) {
        return this.client.delete(`books/${id}/`);
    }

    /**
     * Edit a book with given id and new content
     * @param {*} id 
     * @param {*} content Object containing title, author and description
     */
    editBook(id, content) {
        return this.client.put(`books/${id}/`, content);
    }

    /**
     * Create a new book with given content
     * @param {*} content Object containing title, author and description
     */
    createBook(content) {
        return this.client.post('books/', content);
    }
}



export {BooksApi};