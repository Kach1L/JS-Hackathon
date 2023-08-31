import json
from django.shortcuts import render
from .models import Option, Extra
from .serializers import OptionSerializer, ExtraSerializer
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
def Option_all(request):
    if request.method == 'GET':
        queryset = Option.objects.all()
        serializer = OptionSerializer(queryset, many=True)
        serialized_data = serializer.data
        return JsonResponse(serialized_data, safe=False)
    
@csrf_exempt
def Option_create(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        serializer = OptionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse({'message': 'Option created successfully.'}, status=201)
        else:
            return JsonResponse(serializer.errors, status=400)
        
@csrf_exempt     
def Option_update(request, pk):
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
def Option_delete(request, pk):
    option = Option.objects.filter(pk=pk).first()
    if not option:
        return JsonResponse({'error': 'Option matching query does not exist.'}, status=400)
    if request.method == 'DELETE':
        Option.delete()
        return JsonResponse({'message': 'Option deleted successfully.'}, status=201)
    else:
        return JsonResponse({'error': 'Invalid request'}, status=400)
    

# def shop(request):
#     return render(request, 'Optionsapp/index.html')

# def bulk_insert(request):
#     country_names = [
#         {"name": "Afghanistan", "png": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png"},
#         {"name": "Albania", "png": "https://flagcdn.com/w320/al.png"},
#         {"name": "Algeria", "png": "https://flagcdn.com/w320/dz.png"},
#         {"name": "American Samoa", "png": "https://flagcdn.com/w320/as.png"}
#     ]
#     bulk_insert_countries(country_names)
#     return JsonResponse({"message": "Done!."}, status=201)

def extras(request):
    if request.method == 'GET':
        queryset = Extra.objects.all()
        serializer = ExtraSerializer(queryset, many=True)
        serialized_data = serializer.data
        return JsonResponse(serialized_data, safe=False)