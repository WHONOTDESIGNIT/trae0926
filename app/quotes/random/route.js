import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Otherwise, Next.js will cache this handler's output

const dataSource = 'https://en.wikipedia.org/wiki/AFI%27s_100_Years...100_Movie_Quotes';

// Business and motivational quotes for IPL manufacturing company
const quotes = [
  {
    text: "Innovation distinguishes between a leader and a follower",
    playedBy: "Steve Jobs",
    character: "Apple CEO",
    film: "Technology Leadership",
    year: "2005"
  },
  {
    text: "Quality is not an act, it is a habit",
    playedBy: "Aristotle",
    character: "Philosopher",
    film: "Ancient Wisdom",
    year: "384 BC"
  },
  {
    text: "The best way to predict the future is to create it",
    playedBy: "Peter Drucker",
    character: "Management Consultant",
    film: "Business Innovation",
    year: "1950"
  },
  {
    text: "Excellence is never an accident",
    playedBy: "Aristotle",
    character: "Philosopher", 
    film: "Philosophy of Excellence",
    year: "350 BC"
  },
  {
    text: "Success is not final, failure is not fatal",
    playedBy: "Winston Churchill",
    character: "Prime Minister",
    film: "World War II",
    year: "1942"
  }
];

export async function GET() {
    try {
        const randomId = Math.floor(Math.random() * quotes.length);
        const item = quotes[randomId];
        
        return NextResponse.json({
            ...item,
            dataSource
        });
    } catch (error) {
        console.error('Error getting quotes data:', error);
        return NextResponse.json(
            { error: 'Failed to get quotes data' },
            { status: 500 }
        );
    }
}