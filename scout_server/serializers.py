from rest_framework import serializers
from scout_server.models import SpotType, Spot, SpotAvailableHours, SpotExtendedInfo


class SpotExtendedInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotExtendedInfo
        fields = ('key', 'value', 'spot')


class SpotSerializer(serializers.ModelSerializer):
    spotextendedinfo = SpotExtendedInfoSerializer(many=True, read_only=True)

    class Meta:
        model = Spot
        fields = ('id', 'name', 'latitude', 'longitude', 'building_name', 'floor', 'room_number', 'capacity', 'display_access_restrictions', 'organization', 'manager', 'last_modified', 'external_id', 'spotextendedinfo')

