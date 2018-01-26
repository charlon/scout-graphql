from django.conf.urls import path, re_path
from rest_framework.urlpatterns import format_suffix_patterns
from scout_server import views

urlpatterns = [
    re_path(r'^spots/$', views.SpotList.as_view()),
    re_path(r'^spots/(?P<pk>[0-9]+)/$', views.SpotDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
