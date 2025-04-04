// types/book.ts
export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    year_published: number | null;
    rating: number | null;
    read_status: 'Unread' | 'In Progress' | 'Completed' | '';
  }
  
  export interface NewBook {
    title: string;
    author: string;
    genre: string;
    year_published: number | null;
    rating: number | null;
    read_status: 'Unread' | 'In Progress' | 'Completed' | '';
  }