from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
import requests

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


def classic_demo(request):
    template = loader.get_template('scout_clients/classic/demo.html')

    url = 'http://localhost:8000/graphql'
    json = { 'query' : '{ allSpots { id name buildingName latitude longitude } }' }

    r = requests.post(url=url, json=json)

    context = {
        'hello': "classic demo",
        'graphql': r.text
    }
    return HttpResponse(template.render(context, request))
