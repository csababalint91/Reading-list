import { createContext, useState } from "react";
import uuid from "react-uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', id: 1 },
        { title: 'Vuk, The Little Fox', author: 'Fekete Istvan', id: 2 }
    ]);

    const addBook = (title, author) => {
        setBooks([...books, { title, author, id: uuid() }])
    };
    const removeBook = (id) => {
        setBooks(books.filter(book => book.id !== id));
    };
    return (
        <BookContext.Provider value={{ books, addBook, removeBook }}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;