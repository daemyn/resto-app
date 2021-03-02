# MyResto

Welcome to MyResto, this app uses [Nest.js](www.nestjs.com) for the backend and [Nuxt.js](www.nuxtjs.org) for the frontend.

## Disclaimer

This project is NOT complete and does NOT implement all kind of best practices but it will give you an idea about my approach and the way I like to do things.

Unfortunately I ran short of time but I tried to implement the necessary features.

There will be a section to discuss what could be improved (especially in the frontend side).


## Getting Started

### Requirements

- Node.js 14+
- MongoDB 4+

### Running the api

Run the following commands inside `resto-api` folder to setup and run the backend: 

```bash
# install dependencies
$ npm install

# import sample data to database
$ npm run db:import

# serve with hot reload at localhost:3000
$ npm run start:dev

```

- Database parameters can be changed from `.env` file.
- Once the Backend is up and running you can checkout the API documentation by visiting the following link: http://localhost:3000/docs

### Running the frontend app

Run the following commands inside `resto-app` folder to setup and run the frontend: 

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

```

## Admin

### Access

In order to access to the admin area visit the following link: http://localhost:8080/admin

```
Credentials:
- usename: admin
- passwrod: admin
```

The admin account is hard coded, however it's secure by using JWT and middlewares to protect private endpoints. 

### Item management

The admin area allows to manage categories and items and should be intuitive to use. The only thing you should know is that the categories picture is a simple filename that will seek the actual file inside `resto-app/static/categories` and preferably the image size is 640x480.

## Client area

The client area is a simple item listing by category

## Improvements

As mentioned before there's a lot of improvements that can be made, here's some of them:

- Make the cart feature actually works
- Split the frontend into smaller components to make them reusable and easier to maitain
- Add user entity to the backend instead of using the hardcoded one
- More validation for both sides
- Error Handling
- Unit tests and E2E tests