# Docker + NodeJS sample

[![Build Status](https://travis-ci.org/cilindrox/docker-node-sample.svg?branch=master)](https://travis-ci.org/cilindrox/docker-node-sample)

NodeJS development using Docker made simple.


## Overview

This is a simple REST API built using Hapi.js. The microservice architecture allows it to be run using either Docker or `docker-compose`.

The API is exposed to "the internets" via an NGINX reverse proxy and persistence is handled by a Redis server.


## Configuration

Settings are handled via environment vars, available config values are:

| env         | desc                     |
| ----------- | :----------------------: |
| `REDIS_URL` | uri for the redis server |


## Running the app

1. clone the repo
2. `cd` into the folder
3. `docker compose up`
4. ?????
5. Profit!

Now point your browser towards [http://localhost:8080]() :tada:


### Building the container

If you're developing locally and just want to test the app in isolation, you can
build the container via:

```
docker build -t <username>/<applicationName> --rm .
```

**NOTE** _the optional_ `--rm` flag, used here to remove the intermediate containers

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
