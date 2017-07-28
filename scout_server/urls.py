from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from scout_server import views

urlpatterns = [
    url(r'^spots/$', views.spot_list),
    url(r'^spots/(?P<pk>[0-9]+)/$', views.spot_detail),
]

urlpatterns = format_suffix_patterns(urlpatterns)
