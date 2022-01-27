# Patika-API

## Overview

A RESTful API with a mutli endpoint that retrieves data from the given MongoDB collection


## Table of contents
* [Installation](#installation)
* [API Document](#api-document)
* [Live Demo](#live-demo)


## Installation
Clone repository
```
$ git clone https://github.com/ozivarol/Chat-api
```
Install dependencies
```
npm install
```

## Running

```
$ node app.js

or

$ nodemon npm start
```
Your app should now be running on [localhost:4040](http://localhost:4040/).

## API Document
Available endpoints in application
- GET `/main`
  - Expected Parameters<br>
      \-
  - Response <br>
      Endpoint responds with json
      ```json
      {
        "message": "Hello, welcome to Patika App"
      }
      ```
- POST `/patika/create`
  - Expected Parameters<br>
      \-
  - Response <br>
      Endpoint responds with json
      ```json
      {
       "görev": {
                "id": 1,
                "agv_id": "string",
                "description": "string"
            },
      }
      ```
- GET `/patika/list
  - Expected Parameters<br>
      \-
  - Response <br>
      Endpoint responds with json
      ```json
      {
       "görev": {
                "id": 1,
                "agv_id": "string",
                "description": "string"
            },
      }
      ```
- POST `/user/register`
  - Expected Parameters<br>
      \-
  - Response <br>
      Endpoint responds with json
      ```json
      {
        "username":
        "password":
      }
      ```
 - POST `/user/login`
  - Expected Parameters<br>
      \-
  - Response <br>
      Endpoint responds with json
      ```json
      {
        "username":
        "password":
      }
      ```
      
 ## Live Demo
Application running in the cloud with Heroku. <br>
endpoint of the API is '/main' or other endpoint <br>
Click and play with it!
<a href="https://patika-api.herokuapp.com/main" target="blank"><img align="center" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/heroku_logo_icon_169035.png" alt="oguzhnavarol" height="75" width="200" /></a>    
