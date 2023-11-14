# backend-TODO

Web Services & RESTFul API for ToDoList with Express.

## Deploy Link

https://gentle-jacket-newt.cyclic.app/

### Auth Endpoints

* Register

    method: POST 
    https://gentle-jacket-newt.cyclic.app/auth/regis

    Used to register an account, for example:
    ![Alt text](img/image-auth-regis.png)

    Server response:
    ![Alt text](img/image-regis-messages.png)


* Login

    method: POST
    https://gentle-jacket-newt.cyclic.app/auth/login

    Used to login your account, for the example:
    ![Alt text](img/image-auth-regis.png)

    Server response: <br />
    ![Alt text](img/image-login-messages.png)

### User Endpoints

* Get All Users

    method: GET
    https://gentle-jacket-newt.cyclic.app/users

    Used for checking available users, for the example:
    ![Alt text](img/image-users-get.png)

    Server response:
    ![Alt text](img/image-usersGET-response.png)

* Get User By ID

    method: GET
    https://gentle-jacket-newt.cyclic.app/users/id

    Used to get user data by ID, for the example:
    ![Alt text](img/image-usersGET-response.png)

    Server response: <br />
    ![Alt text](img/image-responsUser3.png)

* Delete User By ID

    method: DELETE
    https://gentle-jacket-newt.cyclic.app/users/id

    Used to delete user data by ID, for the example:
    ![Alt text](img/image-delete.png)

    Server response: <br />
    ![Alt text](img/image-responsDelete.png)

* Update User By ID

    method: PUT
    https://gentle-jacket-newt.cyclic.app/users/id

    Used to update user data by ID, for the example:
    ![Alt text](img/image-UpdatePUT.png)

    Server response: <br />
    ![Alt text](img/image-responseUPDATE.png)


### Todo Endpoints

* Get All Todos

    method: GET
    https://gentle-jacket-newt.cyclic.app/todos

    Used for get all todos, for the example:
    ![Alt text](img/image-GET-Usealltodos.png)

    Server response:
    ![Alt text](img/image-ResponseTODOS-Getall.png)

* Get Todo By ID

    method: GET
    https://gentle-jacket-newt.cyclic.app/todos/id

    Used to get todo data by ID, for the example:
    ![Alt text](img/image-gettodo-BYID.png/)

    Server response: <br />
    ![Alt text](img/image-RESPONS-gettodo-BYID.png)

* Add Todo

    method: POST
    https://gentle-jacket-newt.cyclic.app/todos

    Used to add new todo, for the example:
    ![Alt text](img/image-TODOS-UPDATE.png)

    Server response: <br />
    ![Alt text](img/image-RESPONS-todos-update.png)

* Delete Todo By ID

    method: DELETE
    https://gentle-jacket-newt.cyclic.app/todos/id

    Used to delete todo data by ID, for the example:
    ![Alt text](img/DELETE-todos.png)

    Server response: <br />
    ![Alt text](img/RESPONSE-delete-todoss.png)

    If we check todos:
    ![Alt text](img/CEK-TODOS%20AFTER%20DELETE.png)

    Todo with id = 2 deleted

* Delete All Todo

    method: DELETE
     https://gentle-jacket-newt.cyclic.app/todos

    Used to delete all todo, for the example:
    ![Alt text](img/deletALL-todos.png)

    Server response: <br />
    ![Alt text](img/RESPONSE-deletALL.png)

* Update Todo By ID

    method: PUT
    https://gentle-jacket-newt.cyclic.app/todos/id

    Used to update todo data by ID, for the example:
    ![Alt text](img/UpdateVALUE-TODOS.png)

    Server response: <br />
    ![Alt text](img/Response-Value-TODOSS.png)