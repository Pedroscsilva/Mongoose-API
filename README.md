# Mongoose Express API

This is the project which I am the most proud of so far (as of 23/03/2023). It is an Express API made with mongoose and a ton of abstraction. What makes me happiest about this code is the fact that its abstraction in all layers make it a highly scalable project. 

I've also developed unit tests with chai, jest, and sinon to the service layer of the API.

I also had to play a bit with docker to get this to work as I intended.

## Running it

Provided you have Docker and docker-compose installed on your machine, you may follow the commands below in your terminal to see the API working:

```sh
$ docker-compose up -d
```
This API defaults to your localhost:3001, but you can change it if you are already using this port by editing the docker-compose file.

The API doesn't have any default data for GET methods, however you can add them with the POST methods listed in the routes folder.

Although seeing it working is awesome, do take a moment to check the src structure and the OOP abstraction.

## More

If you would like any help executing it or if you have any suggestion on how to improve this code, please reach me out!

pedroscsilva2001@gmail.com 

+55 24 99243-3741
