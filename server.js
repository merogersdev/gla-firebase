import 'dotenv/config';
import express from 'express';

const port = process.env.PORT || 5000;
const app = express();

app.use(express.static('build'));

app.listen(port, () => console.log(`Server listening on port: ${port}...`));
