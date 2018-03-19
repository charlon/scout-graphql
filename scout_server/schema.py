import graphene

from graphene_django.types import DjangoObjectType, ObjectType

from scout_server.models import Spot

class SpotObjectType(DjangoObjectType):
    class Meta:
        model = Spot

class Query(object):
    spots = graphene.List(SpotObjectType, spot_id=graphene.Int(),)

    def resolve_spots(self, info, **kwargs):
        spot_id = kwargs.get('spot_id')
        if spot_id is not None:
            spots = Spot.objects.filter(pk=spot_id)
            return spots
        else:
            spots = Spot.objects.all()
            return spots
