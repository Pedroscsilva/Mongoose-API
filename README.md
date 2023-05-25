
# Mongoose Typescript Express API

This is an Express API built with Mongoose and incorporates a significant amount of abstraction. One of the aspects that brings me the most satisfaction is the project's highly scalable nature, achieved through the abstraction implemented in all layers.

In addition to the implementation, I have developed comprehensive unit tests using Chai, Jest, and Sinon specifically for the service layer of the API. These tests ensure the reliability and correctness of the functionality.

To enhance the project's deployment and ease of use, I have also utilized Docker. This allows for seamless setup and configuration to achieve the desired functionality and performance.

I am thrilled with the outcomes of this project and the valuable skills I have acquired throughout its development.
## Installation

Install this project using docker

```bash
  docker-compose up -d
```

⚠️ This API defaults to your localhost:3001, but you can change it if you are already using this port by editing the docker-compose file.

    
## API Reference

⚠️ The API reference uses the cars routes as an example, but `cars` and `motorcycles` work interchangeably. 

#### Get all cars

```http
  GET /cars
```

#### Get a specific car

```http
  GET /cars/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of car to fetch |

#### Create a new car

```http
  POST /cars
```

Your request body should look like this for cars:

```json
{
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
}
```

#### Update an existing car

```http
  PUT /cars/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of car to update |


The body of this PUT should look like the POST body.
## Contact

If you would like any help executing it or if you have any suggestion on how to improve this code, please reach me out!

pedroscsilva2001@gmail.com

+55 24 99243-3741
