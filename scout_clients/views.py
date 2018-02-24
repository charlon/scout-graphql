from django.shortcuts import render
from django.template import loader
from django.http import HttpResponse

def index(request):
    template = loader.get_template('scout_clients/index.html')
    context = {
        'hello': "sandbox",
    }
    return HttpResponse(template.render(context, request))


def react_list(request):
    template = loader.get_template('scout_clients/react/list.html')
    context = {
        'hello': "react list",
    }
    return HttpResponse(template.render(context, request))


def react_detail(request):
    template = loader.get_template('scout_clients/react/detail.html')
    context = {
        'hello': "react detail",
    }
    return HttpResponse(template.render(context, request))
