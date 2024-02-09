import { useState } from "react";
import UseBooksContext from "../hooks/use-books-context";
import BookEdit from './BookEdit';

function BookShow( { book }) {
    const [showEdit, setShowEdit] = useState(false);
    const { deleteBookById } = UseBooksContext();

    const handleClickDelete = () => {
        deleteBookById(book.id);
    };

    const handleClickEdit = () => {
        setShowEdit(! showEdit);
    };

    const handleSubmit = () => {
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit onSubmit={handleSubmit} book={book}/>;
    };

    return (
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}></img>
            <div>{content}</div>
            <button className="edit" onClick={handleClickEdit}>
                Edit
            </button>
            <button className="delete" onClick={handleClickDelete}>
                Delete
            </button>
        </div>
    );
};

export default BookShow;