import os
from setuptools import find_packages, setup

with open(os.path.join(os.path.dirname(__file__), 'README.md')) as readme:
    README = readme.read()

# allow setup.py to be run from any path
os.chdir(os.path.normpath(os.path.join(os.path.abspath(__file__), os.pardir)))

setup(
    name='scout-modern',
    version='0.1',
    #packages=['scout_clients, scout_server'],
    packages=find_packages(),
    #namespace_packages=['scout_clients, scout_server'],
    include_package_data=True,
    install_requires=[
        'setuptools',
        'django',
        'django_compressor',
        'djangorestframework',
        'graphene_django',
        'django-cors-headers',
        'django_mobileesp',
        'django-webpack-loader',
        'requests',
        'lesscpy',
        'libsass',
        'ujson'
    ],
    license='Apache License, Version 2.0',
    description='A Django app to ...',
    long_description=README,
    url='http://www.example.com/',
    author='Your Name',
    author_email='yourname@example.com',
    classifiers=[
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: Apache Software License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.6',
        'Programming Language :: Python :: 2.7',
        'Topic :: Internet :: WWW/HTTP',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
    ],
)
