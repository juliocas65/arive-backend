# arive-backend
---------------------
Service to manage Users and their Hobbies.

### Run local on you IDE:
---------------------
* Ensure to set up the environment variables (See Environment variables needed)
* Run the service locally: ``` npm run start:dev```
* Then your service will be up. Try it! (See Services Availables in this doc page).

### Default Port:
---------------------
3000

### Environment variables needed:

* export SERVICE
* export PORT
* export HOST
* export MONGODB_URI

### Services Availables:
---------------------
Checkout the OpenApi Swagger Documentation, once you run the application:
[Swagger Doc](http://localhost:3000/api-docs/)

You can import the Postman Collection to prove the service:
[Postman Collection](https://www.getpostman.com/collections/c4abda888cb2401561a1)

### Testing:
---------------------
* Run the Unit tests: ``` npm run test:unit ```
* Run the Coverage: ``` npm run test:cov ```
* Prepare your database to run the functional test: ``` npm run prepare-functional ```
* Run Functional Test with Newman: ``` npm run test:functional ```
* Run the eslint check: ``` npm run lint ```
