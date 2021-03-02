# RestApp

Simple REST Api, for ToDo application, with auhorization.
Made with NODE.JS, MongoDB

`/api/users/ => POST to register a new user, registration gives us authorized token`

`/api/users/me => GET to get information about logged user`

`/api/todos:id => GET,PUT,DELETE only for authorized users`

`api/auth => POST to login and get authorized token`
