# Express JS 

## Topic Coverd
    1. Introduction to Express.js
    2. Create Express Server
    3. 

#### What is express.js and why express js?
=> 
    1. Framework for nodejs, helps to create and maintain server side coding more easily with less effort.
    2. Helps to write most of the logic in the server side, REST API for mobile, desktop, web
    3. Easy to learn

===================================
### Lesson -1 Create Express Server

===================================
### Lesson -2 HTTP methods and postman

HTTP Methods <br />
<img src='./Lesson-1-create-express-server/img/http-methods.png' alt='http-methods' width='500' height='auto'>

HTTP methods example applied and postman installed, just go to lesson-1 src

=====================================
### Lesson -3 Express Router and Route

to use expres router need to import router from -> express.Router()
then use like that ->
router.get(...)
router.post(...)

** It's recomonded to create a diffrent folder for routing coz there can be lot of route so if we write all the code in app.js it will be mess up.

After writing route in route file then export that file route and inclune or require to app.js file and add app.use(thename using you imported the route)


===========================================================
### Lesson -3 HTTP Response and Cookie

    1.Body can contain data as HTML, text, JSON etc
    2. cookies
    3. Headers
    4. Status code

** res.sendFile(__dirname+directory) -> used to send html file as response
** res.send(string value) -> used to send plane text file as response
** res.json(JSON value) -> used to send JSON file as response
** res.cookie(key,value) -> used to send cookie as response
** res.clearCookie(key name) -> used to clear cookie in response
** res.redirect(directory) -> used to redirect the url or path
** res.status(statuscode) -> used to send the statuscode in response

###NB: Implemented code will be found in Lesson-2 folder

===========================================================
### Lesson - 4 HTTP Reequest, Query Parameter, Route Parameter and request header

**NB: All the implementation and explanation will be found at folder: Lesson-4-http-req-query-parameter


===========================================================
### Lesson - 5 Area Calculator app

** NB: Source code in lesson 5 older

===========================================================
### Lesson - 6 env variable

Q: What is .env file?
=> .env file full form environment file. It's a secret/hidden file - only I can access it.

Q: Why .env file?

=> To store private environment variables for our application. Example - 
    1. http PORT to listen the server
    2. Database url
    3. API keys etc..

Gitlab / heroku support the usage of environment variables.


How to use .env variables?

=> 
Step 1: Create an .env file in the root directory

Step 2: define environment variables using uppercase letters and underscore if more than one work for example - PORT, SATABASE_URL

Step 3: Assign the values without quatation or space, example - PORT=3000

Step 4: You can make a comment using # 
Example: 
#server port
PORT=3000





