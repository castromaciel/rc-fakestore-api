<h1 align="center">
 rc-fakestore-api
</h1>

<div align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

</div>

## Development

### Install dependencies:

```
yarn install
or
npm install 
```

### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| yarn build    | Builds the app for production to the `dist` folder. |
| yarn start    | Runs the app at prod mode.                          |
| yarn dev      | Runs the app in the development mode.               |

## Base Dependencies

- [bcryptjs](https://github.com/dcodeIO/bcrypt.js#readme) to hash and salt passwords securely.
- [cors](https://github.com/expressjs/cors#readme) for providing a Connect/Express middleware.
- [dotenv](https://github.com/motdotla/dotenv#readme) loads environment variables from a .env file into process.env.
- [express](https://expressjs.com/) framework for Node.js.
- [mongoose](https://mongoosejs.com/) mongodb object modeling for node.js.

## Folder Structure

```
rc-fakestore-api
├── dist
    ├── src
    ├── app.js
├── node_modules
└── src
    ├── controllers
    ├── db
    ├── helpers
    ├── middlewares
    ├── models
    ├── routes
    ├── server.js
├── .env
├── .gitignore
├── app.js
├── package-lock.json
├── package.json
├── README.md
```

