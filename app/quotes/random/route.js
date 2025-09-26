import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export const dynamic = 'force-dynamic'; // Otherwise, Next.js will cache this handler's output

const dataSource = 'https://en.wikipedia.org/wiki/AFI%27s_100_Years...100_Movie_Quotes';

export async function GET() {
    try {
        // 读取 JSON 文件
        const filePath = join(process.cwd(), 'data', 'quotes.json');
        const fileContents = readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        
        const randomId = Math.floor(Math.random() * data.length);
        const item = data[randomId];
        
        return NextResponse.json({
            ...item,
            dataSource
        });
    } catch (error) {
        console.error('Error reading quotes data:', error);
        return NextResponse.json(
            { error: 'Failed to load quotes data' },
            { status: 500 }
        );
    }
}