from rest_framework import serializers
from scout_server.models import SpotType, Spot, SpotAvailableHours, SpotExtendedInfo


class SpotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Spot
        fields = ('id', 'name', 'latitude', 'longitude', 'building_name', 'floor', 'room_number', 'capacity', 'display_access_restrictions', 'organization', 'manager', 'last_modified', 'external_id')
