# adonis-js
Simple REST API created with Adonis, Typescript and MySQL.


## Running the project

First, you need to run the application container. For doing this you can use Docker.

```
docker-compose up -d
```

Then you can install dependencies

```
yarn install
```

Migrate the database

```
node ace migration:run
```

And seed the user table

```
node ace db:seed
```

And finally run

```
yarn dev
```

## Overview

### Routes available
#### Auth
- [POST] /auth
- Logout: [DELETE] /auth

#### Posts
- [GET] /posts
- [GET] /posts/:id
- [POST] /posts
- [PUT] /posts/:id
- [DELETE] /posts/:id
