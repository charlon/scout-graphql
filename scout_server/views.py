# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from scout_server.models import Spot
from scout_server.serializers import SpotSerializer


# Create your views here.
@csrf_exempt
def spot_list(request):
	if request.method == 'GET':
		spots = Spot.objects.all()
		serializer = SpotSerializer(spots, many=True)
		return JsonResponse(serializer.data, safe=False)

	if request.method == 'POST':
		data = JSONParser().parse(request)
		serializer = SpotSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return JsonResponse(serializer.data, status=201)
		return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def spot_detail(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        spot = Spot.objects.get(pk=pk)
    except Spot.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = SpotSerializer(spot)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = SpotSerializer(spot, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        spot.delete()
        return HttpResponse(status=204)
