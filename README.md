# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `How to make this app more secure?`

Implement Authentication and Authorization
Input Validation to prevent malicious inputs and SQL injection attacks.
Ensure that the app communicates over HTTPS to encrypt data in transit.
Implement rate limiting to prevent abuse or excessive requests from a single user or IP address.

### `How to make this app scale to millions of records?`

Database Optimization like NoSQL databases or distributed SQL databases.
Implement caching mechanisms to reduce database load.
Employ load balancing techniques.
Add more server instances as needed to handle increased load.