FROM python:3
ENV PYTHONUNBUFFERED 1
WORKDIR /app
ADD . /app/
# ENV DB sqlite3
# RUN pip install mysqlclient
RUN pip install -r requirements.txt
# RUN npm install
RUN django-admin.py startproject project .
# RUN ./node_modules/.bin/webpack --config webpack.config.js -p
ADD dockerproj /app/project/
