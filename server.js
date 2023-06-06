import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (_req, res) =>
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
);

app.listen(port, () => console.log(`Server listening on port: ${port}...`));
