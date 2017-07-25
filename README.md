# scout-server
Spotseeker server implementation using Django REST Framework

Installation (in your existing or empty project)

  $ pip install -e git+https://github.com/charlon/scout-server/#egg=scout_server

Project settings.py

  Add 'scout_server.apps.ScoutServerConfig' and 'rest_framework' to INSTALLED_APPS

Project urls.py

  Add route to scout_server app /scout/api/v1/

In your project/app...
