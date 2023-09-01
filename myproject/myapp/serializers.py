from rest_framework import serializers
from .models import Option, Player

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id', 'question', 'correct_answer', 'wrong_answer1', 'wrong_answer2', 'wrong_answer3', 'category', 'difficulty']
        

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['id', 'user_name', 'score']

# class ExtraSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Extra
#         fields = ['id','hint','button','timer']