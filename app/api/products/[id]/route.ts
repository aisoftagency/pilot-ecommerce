import { NextResponse } from 'next/server';
import mysql from 'mysql2/promise';

async function getDbConnection() {
  return await mysql.createConnection({
    host: 'testing-tausifuniqueit-7a92.d.aivencloud.com',
    port: 27166,
    user: 'avnadmin',
    password: 'AVNS_I4Bua0PfgyOqN3jBf6d',
    database: 'defaultdb',
    ssl: {
      rejectUnauthorized: false
    }
  });
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const connection = await getDbConnection();
    
    const [rows] = await connection.execute(`
      SELECT id, name, slug, price, image_url as imageUrl 
      FROM products 
      WHERE id = ?
    `, [params.id]);
    
    await connection.end();
    
    const products = rows as any[];
    
    if (products.length === 0) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(products[0]);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
