// components/BookList.tsx
import { Book } from '@/types/book';
import React from 'react';

interface BookListProps {
  books: Book[];
  onUpdateBook: (id: number, updates: Partial<Book>) => Promise<void>;
  onDeleteBook: (id: number) => Promise<void>;
}

const BookList: React.FC<BookListProps> = ({ books, onUpdateBook, onDeleteBook }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl text-blue-600 font-semibold mb-4">Your Book Collection</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-left bg-gray-100 border-b border-gray-200 font-semibold text-gray-800">Title</th>
              <th className="p-3 text-left bg-gray-100 border-b border-gray-200 font-semibold text-gray-800">Author</th>
              <th className="p-3 text-left bg-gray-100 border-b border-gray-200 font-semibold text-gray-800">Genre</th>
              <th className="p-3 text-left bg-gray-100 border-b border-gray-200 font-semibold text-gray-800">Year</th>
              <th className="p-3 text-left bg-gray-100 border-b border-gray-200 font-semibold text-gray-800">Rating</th>
              <th className="p-3 text-left bg-gray-100 border-b border-gray-200 font-semibold text-gray-800">Status</th>
              <th className="p-3 text-left bg-gray-100 border-b border-gray-200 font-semibold text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="p-3 border-b border-gray-200 text-gray-800">{book.title}</td>
                <td className="p-3 border-b border-gray-200 text-gray-800">{book.author}</td>
                <td className="p-3 border-b border-gray-200 text-gray-800">{book.genre}</td>
                <td className="p-3 border-b border-gray-200 text-gray-800">{book.year_published}</td>
                <td className="p-3 border-b border-gray-200">
                  <select
                    value={book.rating || ''}
                    onChange={(e) => onUpdateBook(book.id, { rating: Number(e.target.value) })}
                    className="p-1 border border-gray-300 rounded bg-white text-gray-800"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={`book-${book.id}-rating-${n}`} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3 border-b border-gray-200">
                  <select
                    value={book.read_status}
                    onChange={(e) => onUpdateBook(book.id, { read_status: e.target.value as Book['read_status'] })}
                    className="p-1 border border-gray-300 rounded bg-white text-gray-800"
                  >
                    <option value="Unread">Unread</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                  </select>
                </td>
                <td className="p-3 border-b border-gray-200">
                  <button
                    onClick={() => onDeleteBook(book.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded transition-colors duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;