from django.shortcuts import render

# Create your views here.
def main(request):
    return render(request, "index.html")


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import json
from .serializers import YourModelSerializer
from .models import collection
from rest_framework.decorators import api_view, permission_classes

        
@api_view(['GET'])
def getData(request):
    collect=collection.objects.all()
    serializer=YourModelSerializer(collect, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postData(request):
    file_path = 'webapp\jsondata.json'  # Path to your JSON file
    try:
            with open(file_path, 'r',encoding='utf-8') as file:
                data = json.load(file)
                print(data)

            serializer = YourModelSerializer(data=data, many=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except FileNotFoundError:
            return Response({"error": "File not found"}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['DELETE'])
def delete(request):
    coll = collection.objects.all()
    coll.delete()
    return Response({"error": "File deleted"}, status=status.HTTP_204_NO_CONTENT)


@api_view(['POST'])
def storedata(request):
    data=request.data
    try:
        serializer = YourModelSerializer(data=data, many=True)
        if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except:
        message={'detail':'User with this email already exist'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
def getcustomdata(request):
    collect=collection.objects.all()
    serializer=YourModelSerializer(collect, many=True)
    filt=serializer.data
    k=[]
    for i in filt:
        if (i["pestle"] not in k) and i["pestle"]!="":
             k.append(i["pestle"])
    for i in k:
        p=[]
        for j in filt:
            if j["pestle"]==i:
                if j["sector"] not in p and j["sector"]!="":
                     p.append(j["sector"])
                    
        for k in p:
            ct=0
            for l in filt:
                if l["sector"]==k and l["pestle"]==i:
                    ct+=l["relevance"]
            ll="["+"'"+k+"',"+"'"+i+" ',"+str(ct)+"],"
            print(ll)
                       
    # print(k)
    return Response(serializer.data)