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

    # get some json data and pass as 'props' to react
    props = {
        'users': [
            {'username': 'alice'},
            {'username': 'bob'},
        ]
     }

    context = {
        'hello': "react list",
        'props': props,
    }
    return HttpResponse(template.render(context, request))


def react_detail(request):
    template = loader.get_template('scout_clients/react/detail.html')
    context = {
        'hello': "react detail",
    }
    return HttpResponse(template.render(context, request))
