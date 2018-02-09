from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

def index(request):
    template = loader.get_template('scout_clients/index.html')
    context = {
        'hello': "sandbox",
    }
    return HttpResponse(template.render(context, request))


def react(request):
    template = loader.get_template('scout_clients/demo/react.html')
    context = {
        'hello': "react",
    }
    return HttpResponse(template.render(context, request))
