from django.urls import include, path, re_path
from . import views

urlpatterns = [
    # ex: /
    re_path(r'^$', views.index, name='index'),
    path('react/list/', views.react_list, name='react_list'),
    path('react/detail/', views.react_detail, name='react_detail'),
]
