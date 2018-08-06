from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse
from django.http import JsonResponse
import requests
import ujson

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


def angular_demo(request):
    template = loader.get_template('scout_clients/angular/demo.html')
    context = {
        'hello': "angular demo",
    }
    return HttpResponse(template.render(context, request))


def classic_demo(request):
    template = loader.get_template('scout_clients/classic/demo.html')

    # query the graphql endpoint using requests library
    url = 'http://localhost:8000/api/v1/spots/?format=json'
    req = requests.get(url)

    # decode the json response
    spots = req.json()

    # pass the json to template using context object
    context = {
        'hello' : "classic demo",
        'spots' : spots
    }
    return HttpResponse(template.render(context, request))


def spot_json(request):

    # query the graphql endpoint using requests library
    url = 'http://localhost:8000/api/v1/spots/?format=json'
    req = requests.get(url)
    spots = req.json()

    return JsonResponse(spots, safe=False)
