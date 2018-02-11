Welcome to the Scout Server sandbox application
===============================================

This sandbox helps get you started with creating and deploying the Scout Server
application in Django. We will be creating an API server as well as various
client application demos that consume the APIs.

System Requirements
-------------------
* Python (3+)
* Django (2+)
* Virtualenv

What's Here
-----------

This sandbox includes:

* README.md - this file
* serverproject/ - this directory contains your Django project files
* serverproject/manage.py - this Python script is used to start your Django web application
* serverproject/settings/env.example - sample environ .env file for local settings
* serverproject/scout_server - this directory contains your Django application (API servers)
* serverproject/scout_clients - this directory contains your Django application (client)

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

Getting Started
---------------

These directions assume you want to develop on your local computer, and not
from the Amazon EC2 instance itself. If you're on the Amazon EC2 instance, the
virtual environment is already set up for you, and you can start working on the
code.

To work on the sample code, you'll need to clone your project's repository to your
local computer. If you haven't, do that first. You can find instructions in the
AWS CodeStar user guide.


1. Clone this repository

        $ git clone https://github.com/charlon/scout-server
        $ cd scout-server

2. Create a Python3 virtual environment for your Django project. This virtual
   environment allows you to isolate this project and install any packages you
   need without affecting the system Python installation. At the terminal, type
   the following command:

        $ pip3 install virtualenv (optional python3 installation)
        
        $ python3 -m virtualenv . (mac os)
        $ virtualenv --python=python3 . (linux os)

3. Activate the virtual environment and change into the working directory:

        $ source bin/activate
        (scout-server)$ cd serverproject

4. Copy the env.example file into .env. This allows you set environment variables
   for running your application locally. After copying the sample, edit the
   necessary environment variables to suit your local development needs. You
   will also need to load the local environment files by running the source command:

        (scout-server)$ cp serverproject/settings/env.example serverproject/settings/.env

5. Update the .env file using your preferred editor. For the purposes of this
   project, you should update the SECRET_KEY variable.

6. Install Python dependencies for this project:

        (scout-server)$ pip install -r requirements-local.txt

7. Apply any migrations (if needed):

        (scout-server)$ python manage.py makemigrations --settings=serverproject.settings.local
        (scout-server)$ python manage.py migrate --settings=serverproject.settings.local

8. Start the Django server:

        (scout-server)$ python manage.py runserver 0:8000 --settings=serverproject.settings.local

View your APIs
---------------

Once your Django server has started, you will be able to view your APIs
using the online viewer provided by each tool.

Django REST Framework: http://localhost:8000/api/v1/spots/

GraphQL: http://localhost:8000/graphql/

Here is a sample GraphQL query to get you started:

        query {
          allSpots {
            id
          }
        }

View your clients
-----------------

We'll work on this after we have data and working API servers.
