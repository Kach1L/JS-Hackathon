from rest_framework import serializers
from .models import Option, Extra

class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ['id','correct_answer', 'wrong_answer1', 'wrong_answer2', 'wrong_answer3']

class ExtraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Extra
        fields = ['id','hint','button','timer']