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

