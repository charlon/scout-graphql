import graphene

from graphene_django.types import DjangoObjectType, ObjectType

from scout_server.models import Spot

class SpotObjectType(DjangoObjectType):
    class Meta:
        model = Spot

class Query(object):
    spots = graphene.List(SpotObjectType)

    def resolve_spots(self, info, **kwargs):
        return Spot.objects.all()
