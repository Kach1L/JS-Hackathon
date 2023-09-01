import json
from django.shortcuts import render
from .models import Option, Player
from .serializers import OptionSerializer, PlayerSerializer
from rest_framework import generics
# from .utils import bulk_insert_countries

# from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

# Create your views here.

class OptionList(generics.ListCreateAPIView):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer

class OptionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Option.objects.all()
    serializer_class = OptionSerializer

#CRUD
#Create - POST
#Read - GET
#Update - PUT
#Delete - DELETE
def option_all(request):
    if request.method == 'GET':
        queryset = Option.objects.all()
        serializer = OptionSerializer(queryset, many=True)
        serialized_data = serializer.data
        return JsonResponse(serialized_data, safe=False)
    
@csrf_exempt
def option_create(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = OptionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': 'Option created successfully.'}, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)
        
@csrf_exempt     
def option_update(request, pk):
    option = Option.objects.filter(pk=pk).first()
    if not option:
        return JsonResponse({'error': 'Option matching query does not exist.'}, status=400)
    if request.method == 'PUT':
        data = json.loads(request.body)
        serializer = OptionSerializer(option, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': 'Option updated successfully.'}, status=200)
        else:
            return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def option_delete(request, pk):
    option = Option.objects.filter(pk=pk).first()
    if not option:
        return JsonResponse({'error': 'Option matching query does not exist.'}, status=400)
    if request.method == 'DELETE':
        option.delete()
        return JsonResponse({'message': 'Option deleted successfully.'}, status=201)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)

# def extras(request):
#     if request.method == 'GET':
#         queryset = Extra.objects.all()
#         serializer = ExtraSerializer(queryset, many=True)
#         serialized_data = serializer.data
#         return JsonResponse(serialized_data, safe=False)

class PlayerList(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

#CRUD
#Create - POST
#Read - GET
#Update - PUT
#Delete - DELETE
def player_all(request):
    if request.method == 'GET':
        queryset = Player.objects.all()
        serializer = PlayerSerializer(queryset, many=True)
        serialized_data = serializer.data
        return JsonResponse(serialized_data, safe=False)
    
@csrf_exempt
def player_create(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = PlayerSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': 'Player created successfully.'}, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)
        
@csrf_exempt     
def player_update(request, pk):
    player = Player.objects.filter(pk=pk).first()
    if not Player:
        return JsonResponse({'error': 'Player matching query does not exist.'}, status=400)
    if request.method == 'PUT':
        data = json.loads(request.body)
        serializer = PlayerSerializer(player, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': 'Player updated successfully.'}, status=200)
        else:
            return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def player_delete(request, pk):
    player = Player.objects.filter(pk=pk).first()
    if not player:
        return JsonResponse({'error': 'Player matching query does not exist.'}, status=400)
    if request.method == 'DELETE':
        player.delete()
        return JsonResponse({'message': 'Player deleted successfully.'}, status=201)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)

# def extras(request):
#     if request.method == 'GET':
#         queryset = Extra.objects.all()
#         serializer = ExtraSerializer(queryset, many=True)
#         serialized_data = serializer.data
#         return JsonResponse(serialized_data, safe=False)