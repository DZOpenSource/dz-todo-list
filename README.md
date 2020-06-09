
  

# DZ TODO LIST

### Dev tools
1. Install [NodeJS](https://nodejs.org/en/download/)
2. Run the following command in order to install the React generator:
 `npm i create-react-app -g`
3. Install [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
4. To visualize your collections you can add this awesome tool "[robomongo](https://robomongo.org/)" :heart_eyes:
5. Your favorite IDE, but why not [Visual Studio Code](https://code.visualstudio.com/download)

### Install the application
1. Clone the repository
2. Install it using the command:
`npm install`
3. Run the MongoDB local en environment. It's the **mongo.exe** (normally for **Windows** under 'C:\Program Files\MongoDB\Server\4.2\bin' after doing installation explained before)
4. Connect your "**robomongo**" with the local database (still an option)
5. Create a database with the name "**todolist**" and a collection with the name "**items**"

### Launch application
Having the local MongoDB running several options are allowed:

 1. Only the Backend using `npm run-script start-backend`
 2. Only the Frontend (to have the auto refresh) `npm run-script font-end`
 3.  Start the two sides of the application using `npm run-script start-all`
 
The console will show you on which port the result could be displayed.

### Deploy to Heroku
1. Open a [Heroku](https://www.heroku.com/) free account
2. Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
3. On the project folder run `heoku create` (this will create a dymo inside your personal space on Heroku)
4. Run `heroku addons:create mongolab` to create a database related to your Heroku's dyno (you can then access to your mLab space through your [dashboard](https://dashboard.heroku.com/apps) and create a collection with "**items**" as name)
5. Run `git push heroku master` to deploy your application
6. Use the `heroku open` command to open it :blush:
7. Demo [here](https://mighty-meadow-84139.herokuapp.com/)

Made with :heart: by the [DZOpenSource](https://github.com/DZOpenSource) community