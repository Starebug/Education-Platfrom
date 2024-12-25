const express = require('express');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quizRoutes');
const courseRoutes = require('./routes/courseRoutes.js')  
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path')
const dotenv = require('dotenv');
const {connectDB} = require('./config/db.js');
dotenv.config({path: path.resolve(__dirname, './.env')});
const {notFound,errorHandler} = require('./middlewares/errorMiddleware.js');
connectDB();
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send(`
      <h1>Welcome to the Educational Platform API</h1>
      <p>Access the <a href="/api-docs">API Documentation</a>.</p>
  `);
});

app.use(courseRoutes);
app.use(quizRoutes);
// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',  // OpenAPI 3.0 version
    info: {
      title: 'Educational Platform API',
      version: '1.0.0',
      description: 'API for managing courses and quizzes',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Your server URL (you can replace this with a production URL later)
        description: 'Local development server'
      }
    ],
  },
  apis: ['./routes/*.js'],  // Path to your route files containing Swagger JSDoc comments
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});
