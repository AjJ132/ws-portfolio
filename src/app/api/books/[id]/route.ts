// app/api/books/[id]/route.ts
import { NextResponse } from 'next/server';
import { getPool } from '@/lib/db';

export const GET = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const { id } = await params;
  
  const pool = getPool();
  try {
    const query = 'SELECT * FROM books WHERE id = $1';
    const result = await pool.query(query, [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'Book not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error fetching book:', error);
    return NextResponse.json(
      { message: 'Server error while fetching book' },
      { status: 500 }
    );
  }
}

export const PUT = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const pool = getPool();
  const { id } = await params;
  
  try {
    const body = await req.json();
    const { title, author, genre, year_published, rating, read_status } = body;
    
    const query = `
      UPDATE books 
      SET title = $1, author = $2, genre = $3, year_published = $4, rating = $5, read_status = $6 
      WHERE id = $7 
      RETURNING *
    `;
    
    const values = [title, author, genre, year_published, rating, read_status, id];
    const result = await pool.query(query, values);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'Book not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating book:', error);
    return NextResponse.json(
      { message: 'Server error while updating book' },
      { status: 500 }
    );
  }
}

export const PATCH = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const pool = getPool();
  const { id } = await params;
  
  try {
    const updateData = await req.json();
    
    // Dynamically create the SET part of the query
    const fields = Object.keys(updateData);
    const setValues = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
    
    const query = `
      UPDATE books 
      SET ${setValues} 
      WHERE id = $${fields.length + 1} 
      RETURNING *
    `;
    
    const values = [...Object.values(updateData), id];
    const result = await pool.query(query, values);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'Book not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating book:', error);
    return NextResponse.json(
      { message: 'Server error while updating book' },
      { status: 500 }
    );
  }
}

export const DELETE = async (
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) => {
  const pool = getPool();
  const { id } = await params;
  
  try {
    const query = 'DELETE FROM books WHERE id = $1 RETURNING *';
    const result = await pool.query(query, [id]);
    
    if (result.rows.length === 0) {
      return NextResponse.json(
        { message: 'Book not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      message: 'Book deleted successfully',
      book: result.rows[0]
    });
  } catch (error) {
    console.error('Error deleting book:', error);
    return NextResponse.json(
      { message: 'Server error while deleting book' },
      { status: 500 }
    );
  }
}