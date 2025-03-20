const express = require('express');
const app = express();
const bookRoutes = require('./routes/bookRoutes.js');

app.use(express.json()); 


app.use('/api/books', bookRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});