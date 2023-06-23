import express, { Request, Response } from 'express';
import cors from 'cors';

interface Member {
  imgSrc: string;
  name: string;
  title: string;
}

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Sample data for members
const members: Member[] = [
  {
    imgSrc: '/klever-silveira.jpeg',
    name: 'Klever Silveira',
    title: 'Software Engineer'
  },
  {
    imgSrc: '/jordan-walke.jpg',
    name: 'Jordan Walke',
    title: 'Software Engineer'
  },
  {
    imgSrc: '/sophie-alpert.jpeg',
    name: 'Sophie Alpert',
    title: 'Software Engineer'
  }
];

// Route to fetch members data
app.get('/members', (req: Request, res: Response) => {
  res.json(members);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
