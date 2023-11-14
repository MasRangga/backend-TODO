# backend-TODO

Web Services & RESTFul API for ToDoList with Express.

## Deploy Link

https://gentle-jacket-newt.cyclic.app/

### Auth Endpoints

* Register

    method: POST
    https://todo-be.up.railway.app/auth/register

    Used for registering account, for the example:
    ![Alt text](img/image.png)

    Server response:
    ![Alt text](img/image-30.png)


* Login maseter

    method: POST
    https://todo-be.up.railway.app/auth/login

    Used to login your account, for the example:
    ![Alt text](img/image.png)

    Server response: <br />
    ![Alt text](img/image-3.png)

### User Endpoints

* Get All Users

    method: GET
    https://todo-be.up.railway.app/users

    Used for checking available users, for the example:
    ![Alt text](img/image-11.png)

    Server response:
    ![Alt text](img/image-6.png)

* Get User By ID

    method: GET
    https://todo-be.up.railway.app/users/id

    Used to get user data by ID, for the example:
    ![Alt text](img/image-7.png)

    Server response: <br />
    ![Alt text](img/image-9.png)

* Delete User By ID

    method: DELETE
    https://todo-be.up.railway.app/users/id

    Used to delete user data by ID, for the example:
    ![Alt text](img/image-12.png)

    Server response: <br />
    ![Alt text](img/image-13.png)

* Update User By ID

    method: PUT
    https://todo-be.up.railway.app/users/id

    Used to update user data by ID, for the example:
    ![Alt text](img/image-15.png)

    Server response: <br />
    ![Alt text](img/image-16.png)

### Todo Endpoints

* Get All Todos

    method: GET
    https://todo-be.up.railway.app/todos

    Used for get all todos, for the example:
    ![Alt text](img/image-17.png)

    Server response:
    ![Alt text](img/image-18.png)

* Get Todo By ID

    method: GET
    https://todo-be.up.railway.app/todos/id

    Used to get todo data by ID, for the example:
    ![Alt text](img/image-19.png)

    Server response: <br />
    ![Alt text](img/image-20.png)

* Add Todo

    method: POST
    https://todo-be.up.railway.app/todos

    Used to add new todo, for the example:
    ![Alt text](img/image-21.png)

    Server response: <br />
    ![Alt text](img/image-22.png)

* Delete Todo By ID

    method: DELETE
    https://todo-be.up.railway.app/todos/id

    Used to delete todo data by ID, for the example:
    ![Alt text](img/image-23.png)

    Server response: <br />
    ![Alt text](img/image-24.png)

    If we check todos:
    ![Alt text](img/image-25.png)

    Todo with id = 2 deleted

* Delete All Todo

    method: DELETE
    https://todo-be.up.railway.app/todos

    Used to delete all todo, for the example:
    ![Alt text](img/image-28.png)

    Server response: <br />
    ![Alt text](img/image-29.png)

* Update Todo By ID

    method: PUT
    https://todo-be.up.railway.app/todos/id

    Used to update todo data by ID, for the example:
    ![Alt text](img/image-26.png)

    Server response: <br />
    ![Alt text](img/image-27.png)