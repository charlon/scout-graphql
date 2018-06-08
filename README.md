Welcome to the Scout Server sandbox application
===============================================

This sandbox helps get you started with creating and deploying the Scout Server
application in Django. We will be creating an API server as well as various
client application demos that consume the APIs.

System Requirements
-------------------
* Python (3+)
* Django (2+)

What's Here
-----------

This sandbox includes:

* README.md - this file
* docker/ - this directory contains Django project settings used for Docker
* scout_server/ - this directory contains your Django application (API servers)
* scout_clients/ - this directory contains your Django application (client)

API Servers
-----------

REST (via Django REST Framework)
REpresentational State Transfer, is an architectural style for providing
standards between computer systems on the web, making it easier for systems to
communicate with each other. RESTful systems, are characterized by how they are
stateless and separate the concerns of client and server.

GraphQL (via Graphene)
A new API standard that provides a more efficient, powerful and flexible
alternative to REST. It was developed and open-sourced by Facebook. It enables
declarative data fetching where a client can specify exactly
what data it needs from an API. Instead of multiple endpoints that return fixed
data structures, a GraphQL server only exposes a single endpoint and responds
with precisely the data a client asked for.

Client Apps
-----------

We'll explore various ways of consuming APIs and displaying data using Django:

* Template/view architecture (traditional?)
* Client-side Javascript (jQuery)
* Others methods? (React, Angular, etc.)

Getting Started using Docker
----------------------------

These directions assume you want to develop on your local computer, and not
from the Amazon EC2 instance itself. If you're on the Amazon EC2 instance, the
virtual environment is already set up for you, and you can start working on the
code.

To work on the sample code, you'll need to clone your project's repository to your
local computer. If you haven't, do that first. You can find instructions in the
AWS CodeStar user guide.

Setup
-----

1. Clone the repository

        $ git clone https://github.com/charlon/scout-modern.git
        $ cd scout-modern

Node
----

8. Install the node dependencies for the React Demo.

        $ npm install

Webpack
-------

9. Start the webpack "watch mode". This will leave the webpack compiler running
   and compile bundles automatically when changes are made to the source files.
   You'll need to restart this command if you make changes to the webpack config.

        $ ./node_modules/.bin/webpack --config webpack.config.js --watch

Docker
------

10. Docker/Docker Compose is used to containerize your local build environment
    and deploy it to a local container so you can view your application. Docker
    is configured to build an empty 'project' and copy the settings files located
    in the 'docker' directory.

        $ docker-compose up

11. In the case that changes are made to the Dockerfile or docker-compose.yml file,
    you will need to rebuild the image. In this case, 'app' is the name of the
    Docker image for the Django project.

        $ docker-compose build app
        $ docker-compose up

View your APIs
---------------

Once your Django server has started, you will be able to view your APIs
using the online viewer provided by each tool.

Django REST Framework: http://localhost:8000/api/v1/spots/

GraphQL: http://localhost:8000/graphql/

Here are some sample GraphQL queries to get you started:

        query {
          allSpots {
            id
            name
          }
        }

        query {
           spotById (id: 5) {
             id
             name
           }
        }

        query {
           photo(id: 2343) {
            id
            albumId
            url
            thumbnailUrl
          }
        }

View your clients
-----------------

Demo: http://localhost:8000/
