# Book Search Engine: MERN Stack Demonstration

## Table of Contents
[Description](#description)  
[Technologies Used](#technologies-used)  
[Installation Instructions](#installation-instructions) 
[Deployed Application](#deployed-application)
[Questions](#questions)   
 
## Description

This assignment constitutes the refactoring of an already complete Google Books API search engine in order to replace its use of existing RESTful API practices with a GraphQL API. 

The majority of this task has been concerned with establishing an Apollo Provider to communicate with an Apollo Server, so that I might use GraphQL queries and mutations to fetch and modify data. 

This has required the creation of a dedicated schema, populated with typedefs and resolvers that handle user and book management through the GraphQL API.

With these queries and mutations defined, the existing authentication middleware was also modified so that it works in the context of the newly-established GraphQL API.

Deploying the application to Heroku with a MongoDB database using MongoDB Atlas.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Technologies Used

Node.js: https://nodejs.org/

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

Express: https://expressjs.com/

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

React: https://reactjs.org/

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

MongoDB: https://www.mongodb.com/

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

Apollo GraphQL: https://www.apollographql.com/

![Apollo-GraphQL](https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql)

Render: https://render.com/

![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

JWT: https://jwt.io/

![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

## Installation Instructions

  Follow the following steps to properly install this application:


  * Node.js must be installed. You can download the installer directly from the [Nodejs website](https://nodejs.org). Alternatively, if you have Homebrew installed as the de facto package manager for macOS, you can simply type:

```bash
brew install node
```

  * Your next step is to initialize a project by creating a package.json file that will keep track of libraries installed for use in your application by adding the installed package's name and version. This is achieved by typing the following in the command line:

```bash
npm init -y
```

  This command line application makes use of several dependencies:

  * To install these packages, run the following commands from within the CLI at the root of the application:

```bash
npm i
```
  * And finally: 

  Please type the following commands within the terminal to invoke the application:

```bash
npm run build
```

Followed by:

```bash
npm run develop
```

## Deployed Application

## Questions
      
  For further questions:

  If you have any further questions or feedback at this time regarding the repo or application, my contact info can be found as below.
  
  Contact Info:

  GitHub: [Lllewisreynolds](https://github.com/Lllewisreynolds)

  Email: [lsreynolds108@gmail.com](mailto:lsreynolds108@gmail.com)