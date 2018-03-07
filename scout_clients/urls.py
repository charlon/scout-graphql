from django.urls import include, path, re_path
from . import views

urlpatterns = [
    # ex: /
    re_path(r'^$', views.index, name='index'),
    path('react/demo/', views.react_demo, name='react_demo'),
    path('classic/demo/', views.classic_demo, name='classic_demo'),
]
