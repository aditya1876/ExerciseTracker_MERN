# ExerciseTracker_MERN

A MERN app for tracking exercises.

Taken from - https://www.youtube.com/watch?v=7CqJlxBYj-M&list=WL&index=1

## MERN

- M - MongoDB - document based opensource database
- E - Express - a web app framework for Node.js
- R - React - A javascript front end library to build UI
- N - Node.js - A javascript run-time env that executes javascript outside a browser (eg server)

#### Reference

|    RDBMS    |   MongoDB   |
| :---------: | :---------: |
|    table    | collections |
|     Row     |  document   |
|    join     |   $lookup   |
| Foreign key |  reference  |

##### Installing node on python virtual env

    Activate virtual env
    pip install nodeenv
    nodeenv -p

    check node is installed by node -v

#### Steps:

- Create github project
- Clone repo in local
- Create virtual env and activate:
  ```
  python -m venv <env_name>
  source <env_name>/bin/activate
  deactivate (to deactivate env)
  ```
- Set up mongo DB atlas
- Install node in virtual env
  ```
  pip install nodeenv
  nodeenv -p
  ```
- Create base REACT app:
  ```
  npx create-react-app <project_name>
  ```
- Create folder for backend and navigate into that
  ```
  cd <backend_folder>
  npm init -y
  ```
- install dependencies (within the backend folder)
  ```
  npm install express cors mongoose dotenv
  ```
- install nodemon (so we do not have to restart node app manually when there are any file changes)
  ```
  npm install nodemon
  (sudo npm install -g nodemon to install globally)
  ```
- create server file (eg server.js) within <backend_folder> and enter code for server
  ```
  To run the server:
  nodemon server
  ```
- create .env folder in backend to capture all the environment variables (add the file to .gitignore)

- create database schema:
  ```
  Create a folder called models under <backup_folder>
  Create .js files for the models in this folder
  ```
- Create Routes by creating a folder routes within backend folder

  - update server.js with the routing information
  - update the files in 'oroutes' folder to perform routing

- Create frontend

  - within public folder > update index.html
  - within src folder > update index.js, app.js
  - app.js is the main file that app starts

  ```
  to run the app:
  navigate to main app folder
  npm start
  ```

  - install

  ```
  npm install bootstrap
  npm install react-router-dom

  ```

  - create folder called components inside the same directory as app.js and add all the react components in it
  - Enter code in the components for each module
  - install

  ```
    npm install react-datepicker
    npm install axios
  ```
