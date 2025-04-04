'use client';
import BookForm from '@/components/assignment-2/BookForm';
import BookList from '@/components/assignment-2/BookList';
import { Book, NewBook } from '@/types/book';
import { useState, useEffect } from 'react';

export default function Assignment2() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
      alert('Failed to load books');
    }
  };

  const addBook = async (newBook: NewBook) => {
    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
      
      if (!response.ok) {
        throw new Error('Failed to add book');
      }
      
      fetchBooks();
    } catch (error) {
      console.error('Error adding book:', error);
      alert('Failed to add book');
    }
  };

  const updateBook = async (id: number, updatedFields: Partial<Book>) => {
    try {
      const response = await fetch(`/api/books/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFields),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update book');
      }
      
      // Update the local state immediately
      setBooks(books.map(book => 
        book.id === id ? { ...book, ...updatedFields } : book
      ));
      
      console.log(`Book ${id} updated with:`, updatedFields);
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book');
      fetchBooks();
    }
  };

  const deleteBook = async (id: number) => {
    if (confirm('Are you sure you want to delete this book?')) {
      try {
        const response = await fetch(`/api/books/${id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete book');
        }
        
        fetchBooks();
      } catch (error) {
        console.error('Error deleting book:', error);
        alert('Failed to delete book');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto py-10 px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Personal Book Collection</h1>
        </header>

        <BookForm onAddBook={addBook} />
        <BookList 
          books={books} 
          onUpdateBook={updateBook} 
          onDeleteBook={deleteBook} 
        />
      </div>
    </div>
  );
}