import graphene
from graphene import relay, ObjectType, AbstractType
from graphene_django.types import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from scout_server.models import *


class SpotTypeType(DjangoObjectType):
    class Meta:
        model = SpotType
        filter_fields = [] # must have filter_fields defined.. even if empty
        interfaces = (relay.Node, )


class SpotType(DjangoObjectType):
    class Meta:
        model = Spot
        #filter_fields = ['name']
        filter_fields = {
            'name': ['exact', 'icontains', 'istartswith'],
        }
        interfaces = (relay.Node, )

# KNOWN ISSUES... https://github.com/graphql-python/graphene-django/issues/302

class SpotAvailableHoursType(DjangoObjectType):
    class Meta:
        model = SpotAvailableHours
        filter_fields = [] # must have filter_fields defined.. even if empty
        interfaces = (relay.Node, )


class SpotExtendedInfoType(DjangoObjectType):
    class Meta:
        model = SpotExtendedInfo
        filter_fields = [] # must have filter_fields defined.. even if empty
        interfaces = (relay.Node, )


class Query(object):
    spottype = relay.Node.Field(SpotTypeType)
    all_spottypes = DjangoFilterConnectionField(SpotTypeType)

    spot = relay.Node.Field(SpotType)
    all_spots = DjangoFilterConnectionField(SpotType)

    spotavailablehours = relay.Node.Field(SpotAvailableHoursType)
    all_spotavailablehours = DjangoFilterConnectionField(SpotAvailableHoursType)

    spotextendedifo = relay.Node.Field(SpotExtendedInfoType)
    all_spotextendedinfo = DjangoFilterConnectionField(SpotExtendedInfoType)
