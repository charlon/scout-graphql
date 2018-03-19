import graphene
import json
import requests
from collections import namedtuple

from graphene_django.types import DjangoObjectType, ObjectType

from scout_server.models import Spot


def _json_object_hook(d): return namedtuple('X', d.keys())(*d.values())
def json2obj(data): return json.loads(data, object_hook=_json_object_hook)


class PhotoObjectType(ObjectType):
    albumId = graphene.ID()
    id = graphene.ID()
    title = graphene.String()
    url = graphene.String()
    thumbnailUrl = graphene.String()


class SpotObjectType(DjangoObjectType):
    class Meta:
        model = Spot


class PhotoQuery(object):
    photos = graphene.List(PhotoObjectType, album_id=graphene.Int())

    def resolve_photos(self, info, **kwargs):
        album_id = kwargs.get('album_id')
        if album_id is not None:
            url = "https://jsonplaceholder.typicode.com/photos/?albumId={}".format(album_id)
        else:
            url = "https://jsonplaceholder.typicode.com/photos"

        response = requests.get(url=url)
        data = response.text
        photos = json2obj(data)

        return photos


class SpotQuery(object):
    spots = graphene.List(SpotObjectType, spot_id=graphene.Int(),)

    def resolve_spots(self, info, **kwargs):
        spot_id = kwargs.get('spot_id')
        if spot_id is not None:
            spots = Spot.objects.filter(pk=spot_id)
        else:
            spots = Spot.objects.all()

        return spots


class Query(PhotoQuery, SpotQuery):
    pass
