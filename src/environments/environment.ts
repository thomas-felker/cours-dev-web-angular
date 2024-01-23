export const environment = {
  production: false,
  backend: {
    protocol: 'http',
    host: '127.0.0.1',
    port: '3000',
    endpoints: {
      randomEmployee: '/api/employe/random',
      allEmployees: '/api/employe',
      oneEmployeeById: '/api/employe/:id',
      filterByName: '/api/employe/name/:name'
    }
  }
};
