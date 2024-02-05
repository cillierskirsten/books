import { useState } from "react";
import BookEdit from './BookEdit';

function BookShow( { book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleClickDelete = () => {
        onDelete(book.id);
    };

    const handleClickEdit = () => {
        setShowEdit(! showEdit);
    };

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);
        onEdit(id, newTitle);
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