# Docker + NodeJS sample

[![Build Status](https://travis-ci.org/cilindrox/docker-node-sample.svg?branch=master)](https://travis-ci.org/cilindrox/docker-node-sample)

This is a simple REST API built using Hapi.js. The app has been Dockerized and can thus be run using either Docker or `docker-compose`.

## Running the app

In order to build the container we’ll need to run the following command:

```
docker build -t <username>/<applicationName> .
```

Optionally, pass it the `--rm` flag to remove the intermediate containers
(**recommended**):

```
docker build -t <username>/<applicationName> --rm .
```

This tells Docker to *dockerize* the entire folder application (`.`) and name the container `<userName>/<applicationName>`.
This is another Docker best practice, you can call your container as you see fit, but a pattern is using your Docker username and your application name joined by a slash (`/`), ie:

```
docker build -t cilindrox/docker-sample .
```

Once the image has been built, you can run the container via the `run` command:

```
docker run -d -p 8080:3000 <username>/<applicationName>
```

This will spin up a new container along with the Node application, mapping the port `3000` of the container to the port `8080` of the host.
You can verify this by typing `docker ps` in your console.

