from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name="main"),
    path('alldata/', views.getData, name="alldata"),
    path('topost/', views.postData, name="topost"),
    path('todelete/', views.delete, name="todelete"),
    path('tostore/', views.storedata, name="tostore"),
     path('tocustom/', views.getcustomdata, name="tocustom"),
]