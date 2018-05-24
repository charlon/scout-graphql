from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
import requests
import json

def index(request):
    template = loader.get_template('scout_clients/index.html')
    context = {
        'hello': "sandbox",
    }
    return HttpResponse(template.render(context, request))


def react_demo(request):
    template = loader.get_template('scout_clients/react/demo.html')
    context = {
        'hello': "react demo",
    }
    return HttpResponse(template.render(context, request))


def vue_demo(request):
    template = loader.get_template('scout_clients/vue/demo.html')
    context = {
        'hello': "vue demo",
    }
    return HttpResponse(template.render(context, request))


def classic_demo(request):
    template = loader.get_template('scout_clients/classic/demo.html')

    # query the graphql endpoint using requests library
    url = 'http://localhost:8000/graphql'
    query = { 'query' : '{ allSpots { id name buildingName latitude longitude } allPhotos { id url thumbnailUrl } }' }
    response = requests.post(url=url, json=query)

    # turn the json response text into a python dict
    data = json.loads(response.text)

    # get the spot data
    spots = data['data']['allSpots']
    photos = data['data']['allPhotos']

    # pass the data to template using context object
    context = {
        'hello' : "classic demo",
        'spots' : spots,
        'photos' : photos
    }
    return HttpResponse(template.render(context, request))
