from django.urls import include, path, re_path
from . import views

urlpatterns = [
    # ex: /
    re_path(r'^$', views.index, name='index'),
    path('react/demo/', views.react_demo, name='react_demo'),
]
