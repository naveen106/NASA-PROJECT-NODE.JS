
const app = require('../../app');  //get express app
const request = require('supertest');  //get supertest package

describe('Testing /launches', () => {

   //for GET request
   test('GET responding with statusCode 200', async () => {
      
      const response = await request(app).get('/launches');   //will call app's '/launches' router GET request.
      
      //toBe(primitiveValue)
      expect(response.statusCode).toBe(200);  //check if statusCode returned is 200 or not.

   });


   const postDataWithDate = {
      mission: 'Hello New Earth',
      rocket: 'NKK 101-A',
      target: 'Kepler 442-b',
      launchDate: 'April 28, 2022'
   };

   const postDataWithoutDate = {
      mission: 'Hello New Earth',
      rocket: 'NKK 101-A',
      target: 'Kepler 442-b'      
   };

   //for post request
   test('POST responding with statusCode 201', async () => {

       const response = await request(app).post('/launches')
         .send( postDataWithDate )
         .expect('Content-Type', /json/) //it will get passed if our content-type as long as it contains 'json' word in it.
         .expect(201);         
      
      const requestDate = new Date(postDataWithDate.launchDate);
      const responseDate = new Date(response.body.launchDate);
      
      expect(requestDate).toMatchObject(responseDate);

      //console.log(response.body);
      console.log(postDataWithoutDate == response.body);
      //for testing body, use jest's expect().      
      expect(response.body).toMatchObject(   //toBe() for primitive, toMatchObject() for matching Objects,
         postDataWithoutDate
      );

   });

});
