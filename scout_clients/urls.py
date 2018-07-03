from django.urls import include, path, re_path
from . import views

urlpatterns = [
    # ex: /
    re_path(r'^$', views.index, name='index'),
    path('classic/demo/', views.classic_demo, name='classic_demo'),
    path('react/demo/', views.react_demo, name='react_demo'),
    path('vue/demo/', views.vue_demo, name='vue_demo'),
    path('angular/demo/', views.angular_demo, name='angular_demo'),
]
