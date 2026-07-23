const express = require('express');

const app = express();
const PORT = 8000;

//IN memory database
const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
];

//middleware (plugins) to parse JSON request bodies
app.use(express.json()); // Parse JSON request bodies

//routes
app.get('/books', (req,res)=>{
    res.setHeader('x-author', 'Aviansh Som');
    res.json(books);
});
//write dynamic parameter by :
app.get('/books/:id', (req,res)=> {
    const id = req.params.id;
    if(isNaN(id)) {
        return res.status(400).json({ error: 'Invalid book ID' });
    }

    const book = books.find((b) => b.id === parseInt(id));
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
});

app.post('/books', (req,res)=>{
    console.log(req.body);
    return res.json({ message: 'POST request to /books endpoint' });
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})