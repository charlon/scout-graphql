FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app
ADD . /app/

RUN pip install -r requirements.txt
RUN django-admin.py startproject project .
ADD dockerproj /app/project/

# RUN npm install
# RUN ./node_modules/.bin/webpack --config webpack.config.js -p
