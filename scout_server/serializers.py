from rest_framework import serializers
from scout_server.models import SpotType, Spot, SpotAvailableHours, SpotExtendedInfo


class SpotExtendedInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotExtendedInfo
        fields = ('key', 'value', 'spot')


class SpotSerializer(serializers.ModelSerializer):
    spotextendedinfo = SpotExtendedInfoSerializer(many=True)

    class Meta:
        model = Spot
        fields = ('id', 'name', 'latitude', 'longitude', 'building_name', 'floor', 'room_number', 'capacity', 'display_access_restrictions', 'organization', 'manager', 'last_modified', 'external_id', 'spotextendedinfo')

    def create(self, validated_data):
        spotextendedinfo_data = validate_data.pop('spotextendedinfo')
        spot = Spot.objects.create(**validated_data)
        for spotextendedinfo_datum in spotextendedinfo_data:
            SpotExtendedInfo.objects.create(spot=spot, **spotextendedinfo_data)
        return spot

