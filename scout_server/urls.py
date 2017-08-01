from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from scout_server import views

urlpatterns = [
    url(r'^spots/$', views.SpotList.as_view()),
    url(r'^spots/(?P<pk>[0-9]+)/$', views.SpotDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
