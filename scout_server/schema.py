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

    spot = graphene.Field(SpotType,
                          id=graphene.Int(),
                          building_name=graphene.String(),)

    def resolve_all_spottypes(self, info, **kwargs):
        return SpotType.objects.all()

    def resolve_all_spots(self, info, **kwargs):
        return Spot.objects.all()

    def resolve_all_spotavailablehours(self, info, **kwargs):
        return SpotAvailableHours.all()

    def resolve_all_spotextendedinfo(self, info, **kwargs):
        return SpotExtendedInfo.objects.all()

    def resolve_spot(self, info, **kwargs):
        id = kwargs.get('id')
        building_name = kwargs.get('building_name')

        if id is not None:
            return Spot.objects.get(pk=id)

        return None
