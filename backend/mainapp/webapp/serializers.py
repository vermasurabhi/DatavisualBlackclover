from rest_framework import serializers
from .models import collection

class YourModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = collection
        fields = '__all__'