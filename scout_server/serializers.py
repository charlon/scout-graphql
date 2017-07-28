from rest_framework import serializers
from scout_server.models import SpotType, Spot, SpotAvailableHours, SpotExtendedInfo


class SpotSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(max_length=100, required=False, allow_blank=True)
    #spottypes = models.ManyToManyField(SpotType, max_length=50,
    #                                   related_name='spots', blank=True,
    #                                   null=True)
    latitude = serializers.DecimalField(max_digits=11, decimal_places=8)
    longitude = serializers.DecimalField(max_digits=11, decimal_places=8)
    #height_from_sea_level = models.DecimalField(max_digits=11,
    #                                            decimal_places=8, null=True,
    #                                            blank=True)
    building_name = serializers.CharField(max_length=100, required=False, allow_blank=True)
    floor = serializers.CharField(max_length=50, required=False, allow_blank=True)
    room_number = serializers.CharField(max_length=25, required=False, allow_blank=True)
    capacity = serializers.IntegerField(required=False)
    display_access_restrictions = serializers.CharField(max_length=200, required=False, allow_blank=True)
    organization = serializers.CharField(max_length=50, required=False, allow_blank=True)
    manager = serializers.CharField(max_length=50, required=False, allow_blank=True)
    #etag = serializers.CharField(max_length=40, read_only=True)
    last_modified = serializers.DateTimeField(read_only=True)
    external_id = serializers.CharField(max_length=100, required=False, allow_blank=True)

    def create(self, validated_data):
        return Spot.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.latitude = validated_data.get('latitude', instance.latitude)
        instance.longitude = validated_data.get('longitude', instance.longitude)
        instance.building_name = validated_data.get('building_name', instance.building_name)
        instance.floor = validated_data.get('floor', instance.floor)
        instance.room_number = validated_data.get('room_number', instance.room_number)
        instance.capacity = validated_data.get('capacity', instance.capacity)
        instance.display_access_restrictions = validated_data.get('display_access_restrictions', instance.display_access_restrictions)
        instance.organization = validated_data.get('organization', instance.organization)
        instance.manager = validated_data.get('manager', instance.manager)
        #instance.etag = validated_data.get('etag', instance.etag)
        instance.last_modified = validated_data.get('last_modified', instance.last_modified)
        instance.external_id = validated_data.get('external_id', instance.external_id)
        instance.save()
        return instance
