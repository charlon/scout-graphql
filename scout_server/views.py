# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from scout_server.models import Spot
from scout_server.serializers import SpotSerializer


@api_view(['GET', 'POST'])
def spot_list(request, format=None):
	if request.method == 'GET':
		spots = Spot.objects.all()
		serializer = SpotSerializer(spots, many=True)
		return Response(serializer.data)

	if request.method == 'POST':
		data = JSONParser().parse(request)
		serializer = SpotSerializer(data=data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status=201)
		return Response(serializer.errors, status=400)

@api_view(['GET', 'PUT', 'DELETE'])
def spot_detail(request, pk, format=None):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        spot = Spot.objects.get(pk=pk)
    except Spot.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = SpotSerializer(spot)
        return Response(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = SpotSerializer(spot, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        spot.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
