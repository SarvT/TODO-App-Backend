# Project name - TODO App Backend

    This is an TODO API made using Node.js and Express.

Description -
Create a TODO app backend with below APIs

## API chart
Method       Endpoint         Description
POST        /api/todo   Create a new todo. It should return todo-id in response. Default status for todo is “pending”.
GET         /api/todos   Get all todos, List of todos
GET         /api/todo/{todoId} Get todo by todoId
POST        /api/todo/{todoId}/done        Mark todo status as done
DELETE      /api/todo/{todoId}/delete       Delete todo by id

### Follow below steps to run the API.

For installing the node modules.
````
npm install
````

For installing the express library.
````
npm install --save express
````

For installing the body parser library.
````
npm install body-parser
````


## Usage
Refer the API chart above for appropriate usage (Method, Endpoint, Description).


## Schema of todo
{
    description: string,
    status: string,
    id: number
}

### Starting the server
After installing all the necessary things, follow below steps : 

type commands in command pallete:

````
node index.js
````
 
Then fire the below link in your browser.
````
http://localhost:8080
````
