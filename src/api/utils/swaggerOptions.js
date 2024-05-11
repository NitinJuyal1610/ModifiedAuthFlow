export const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Modified Auth API',
      description: '',
      contact: {
        name: 'Nitin',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/api/routes/v1/**/*.js'],
};
