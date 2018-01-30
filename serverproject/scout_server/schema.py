import graphene

from graphene_django.types import DjangoObjectType
from scout_server.models import *


class SpotTypeType(DjangoObjectType):
    class Meta:
        model = SpotType


class SpotType(DjangoObjectType):
    class Meta:
        model = Spot


class SpotAvailableHoursType(DjangoObjectType):
    class Meta:
        model = SpotAvailableHours


class SpotExtendedInfoType(DjangoObjectType):
    class Meta:
        model = SpotExtendedInfo


class Query(object):
    all_spottypes = graphene.List(SpotTypeType)
    all_spots = graphene.List(SpotType)
    all_spotavailablehours = graphene.List(SpotAvailableHoursType)
    all_spotextendedinfo = graphene.List(SpotExtendedInfoType)

    spot_by_id = graphene.Field(SpotType,
                                id=graphene.Int(),)

    spots_by_building_name = graphene.List(SpotType,
                                           building_name=graphene.String(),)

    spots_by_extended_info = graphene.List(SpotType,
                                           key=graphene.String(),
                                           value=graphene.String(),)

    def resolve_all_spottypes(self, info, **kwargs):
        return SpotType.objects.all()

    def resolve_all_spots(self, info, **kwargs):
        return Spot.objects.all()

    def resolve_all_spotavailablehours(self, info, **kwargs):
        return SpotAvailableHours.all()

    def resolve_all_spotextendedinfo(self, info, **kwargs):
        return SpotExtendedInfo.objects.all()

    def resolve_spot_by_id(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Spot.objects.get(pk=id)

    def resolve_spots_by_building_name(self, info, **kwargs):
        building_name = kwargs.get('building_name')

        if building_name is not None:
            return Spot.objects.filter(building_name=building_name)

        return None

    def resolve_spots_by_extended_info(self, info, **kwargs):
        key = kwargs.get('key')
        value = kwargs.get('value')

        if key == 'app_type' and value == 'study':
            return Spot.objects.exclude(spotextendedinfo__key='app_type')
        elif key is not None and value is not None:
            return Spot.objects.filter(spotextendedinfo__key=key,
                                       spotextendedinfo__value=value)
