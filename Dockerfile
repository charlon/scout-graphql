FROM python:3
ENV PYTHONUNBUFFERED 1

# copy contents of repo into an 'app' directory on container
ADD . /app
WORKDIR /app

# install python dependency packages (via setup.py) on container
RUN pip install -r requirements.txt

# create an empty django 'project' on the container
#RUN django-admin.py startproject project .

# move manage.py out of dockerproj to root
COPY dockerproj/manage.py /app/manage.py

# copy contents of 'docker' settings into the project directory on container
#ADD docker /app/project/
