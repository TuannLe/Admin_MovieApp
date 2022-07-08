import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors'
import categories from './routers/categories.js'

const app = express();
const POST = process.env.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }));
app.use(cors());

app.use('/categories', categories)

app.listen(POST, () => {
    console.log(`Server is running on post ${POST}`);
})