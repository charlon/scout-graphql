from rest_framework import serializers
from scout_server.models import SpotType, Spot, SpotAvailableHours, SpotExtendedInfo


class SpotExtendedInfoField(serializers.RelatedField):
    def to_representation(self, value):
        return "%s" % value


class SpotAvailableHoursField(serializers.RelatedField):
    def to_representation(self, value):
        return "%s" % value


class SpotExtendedInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotExtendedInfo
        fields = ('key', 'value', 'spot')


class SpotAvailableHoursSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpotAvailableHours
        fields = ('day', 'start_time', 'end_time')


class SpotSerializer(serializers.ModelSerializer):
    spotextendedinfo = SpotExtendedInfoField(many=True, read_only=True)
    spotavailablehours_set = SpotAvailableHoursField(many=True, read_only=True)

    class Meta:
        model = Spot
        fields = ('id', 'name', 'latitude', 'longitude', 'building_name', 'floor', 'room_number', 'capacity', 'display_access_restrictions', 'organization', 'manager', 'last_modified', 'external_id', 'spotextendedinfo', 'spotavailablehours_set')

    def create(self, validated_data):
        spotextendedinfo_data = validate_data.pop('spotextendedinfo')
        spotavailablehours_data = validate_data.pop('spotavailablehours')
        spot = Spot.objects.create(**validated_data)
        for spotextendedinfo_datum in spotextendedinfo_data:
            SpotExtendedInfo.objects.create(spot=spot, **spotextendedinfo_data)
        for spotavailablehours_datum in spotavailablehours_data:
            SpotAvailableHours.objects.create(spot=spot, **spotavailablehours_data)
        return spot

