// components/BookForm.tsx
'use client';
import { NewBook } from '@/types/book';
import React, { useState } from 'react';

interface BookFormProps {
  onAddBook: (book: NewBook) => Promise<void>;
}

const BookForm: React.FC<BookFormProps> = ({ onAddBook }) => {
  const [newBook, setNewBook] = useState<NewBook>({
    title: '',
    author: '',
    genre: '',
    year_published: null,
    rating: null,
    read_status: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onAddBook(newBook);
    setNewBook({
      title: '',
      author: '',
      genre: '',
      year_published: null,
      rating: null,
      read_status: '',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl text-blue-600 font-semibold mb-4">Add New Book</h2>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-3">
        <input
          type="text"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          placeholder="Title"
          required
          className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded text-black  bg-white"
        />
        <input
          type="text"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          placeholder="Author"
          required
          className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded  bg-white"
        />
        <input
          type="text"
          value={newBook.genre}
          onChange={(e) => setNewBook({ ...newBook, genre: e.target.value })}
          placeholder="Genre"
          className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded  bg-white"
        />
        <input
          type="number"
          value={newBook.year_published || ''}
          onChange={(e) => setNewBook({ ...newBook, year_published: e.target.value ? Number(e.target.value) : null })}
          placeholder="Year Published"
          className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded  bg-white"
        />
        <select
          value={newBook.rating || ''}
          onChange={(e) => setNewBook({ ...newBook, rating: e.target.value ? Number(e.target.value) : null })}
          className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded text-gray-800 bg-white"
        >
          <option value="" disabled>Rating</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={`rating-${n}`} value={n}>
              {n}
            </option>
          ))}
        </select>
        <select
          value={newBook.read_status}
          onChange={(e) => setNewBook({ ...newBook, read_status: e.target.value as NewBook['read_status'] })}
          className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded text-gray-800 bg-white"
        >
          <option value="" disabled>Read Status</option>
          <option value="Unread">Unread</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold p-2 rounded transition-colors duration-300"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;