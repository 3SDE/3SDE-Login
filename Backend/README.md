# 3SDE-Login


Project Name: 3SDE

Project Version Frontend & Backend

A React App using express that hashes password using b-crypt, hashing, salting, and authentication.


This project utilizes backend functions to allow users to register with an email address and password initially. Once a user is registered, we take the user's password and hash it on the backend, so that their password information is encrypted and not recognizable. Once a user is registered, they can then log in to the app using their email and password. In the event that a user forget their password, then they can provide their email address, and we will match it to the corresponding id they were assigned when they intially registerd. Once they are matched with their id, they can then reset their password, and once their password has been reset, they can then log in using the same email address, and their new password.


Author

Chief Technology Officer: Nebyou Chaka
Chief Information Officer: Jackson McGuire
Chief Business Strategist: Ihsan Muhammad

Initial work - 3SDE (Repository space)
LinkedIn: 
Nebyou Chaka: https://www.linkedin.com/in/nebyou-t-chaka-5b3b2443/
Ihsan Muhammad: https://www.linkedin.com/in/iam101/
Jackson McGuire: https://www.linkedin.com/in/jackson-mcguire/


Showcase
This project was designed to demonstrate:

Technology 1
React

Technology 2
Express

Technology 3
Hashing & B-crypt

Usage example
A social media app that allows people to register using an email and password, that has the capabilities to allow users to reset their password if they forget it.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

Fork it (https://github.com/yourname/yourproject/fork)
Create your feature branch (git checkout -b feature/fooBar)
Commit your changes (git commit -am 'Add some fooBar')
Push to the branch (git push origin feature/fooBar)
Create a new Pull Request