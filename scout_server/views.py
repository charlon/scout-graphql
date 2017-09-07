# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from scout_server.models import Spot
from scout_server.serializers import SpotSerializer
from rest_framework import generics


class SpotList(generics.ListCreateAPIView):
    """
    List all spots, or create a new spot.
    """
    queryset = Spot.objects.all()
    queryset = SpotSerializer.setup_eager_loading(SpotSerializer, queryset)
    serializer_class = SpotSerializer


class SpotDetail(generics.RetrieveUpdateDestroyAPIView):
    """
    Retrieve, update or delete a spot instance.
    """
    queryset = Spot.objects.all()
    serializer_class = SpotSerializer
