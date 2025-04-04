import { getPool } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET() {
  const pool = getPool();
  
  try {
    const query = 'SELECT * FROM books ORDER BY id ASC';
    const result = await pool.query(query);
    
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching books:', error);
    return NextResponse.json(
      { message: 'Server error while fetching books' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  const pool = getPool();
  
  try {
    const body = await request.json();
    const { title, author, genre, year_published, rating, read_status } = body;
    
    const query = `
      INSERT INTO books (title, author, genre, year_published, rating, read_status) 
      VALUES ($1, $2, $3, $4, $5, $6) 
      RETURNING *
    `;
    
    const values = [title, author, genre, year_published, rating, read_status];
    const result = await pool.query(query, values);
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating book:', error);
    return NextResponse.json(
      { message: 'Server error while creating book' },
      { status: 500 }
    );
  }
}